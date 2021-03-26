using FS.Abp.File.Directories;
using FS.Abp.Files;
using FS.Abp.Npoi.Mapper;
using FS.Cms.Blogs;
using FS.Cms.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;
using Volo.Abp.VirtualFileSystem;
using Volo.FileManagement.Files;

namespace FS.Cms.Data.Seeder
{
    public class BlogsSeeder : ITransientDependency
    {
        public IGuidGenerator _guidGenerator { get; set; }
        public IBlogsStore _blogsStore { get; set; }
        public IVirtualFileNpoiReader _virtualFileNpoiReader { get; set; }
        public IVirtualFileProvider _virtualFileProvider { get; set; }
        public IFileGeneraterManager _fileGeneraterManager { get; set; }

        public IDirectoriesManager directoriesManager { get; set; }


        /// <summary>
        /// <para> 匯入Blog和圖片，詳細請參考DEMO範例Excel</para>
        /// <para>檔案放法:</para>
        /// <para>1.根據BlogNo產生資料夾，BlogNo有多層資料夾也要開多層，例如BlogNo是  校園公告.A => 資料夾路徑為 校園公告/A</para>
        /// <para>2.在剛剛產生的資料夾放圖檔，如此就會在產生的時候匯入這些檔案了</para>
        /// </summary>
        /// <param name="context"></param>
        /// <param name="virtualFilePath">Excel檔案路徑(virtual file)</param>
        /// <param name="virtualImageContentPath">匯入檔案的目錄(virtual file)，圖檔副檔名目前支援 jpg|jpeg|png|gif </param>
        /// <returns></returns>
        public async Task SeedAsync(DataSeedContext context, string virtualFilePath, string virtualImageContentPath)
        {
            var hasDatas = (await this._blogsStore.Blog.GetCountAsync()) > 0;
            if (hasDatas) return;

            try
            {
                var blogs = _virtualFileNpoiReader.Read<BlogImportModel>(virtualFilePath, "Blog");

                blogs.ForEach(x => x.No = x.No.Trim());

                await createBlogs(context, blogs, virtualImageContentPath).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                throw new Exception("[CmsBlog]匯入Blog失敗:", ex);
            }
        }

        private async Task createBlogs(DataSeedContext context, List<BlogImportModel> sourceData, string virtualImageContentPath)
        {
            var duplicateNos = sourceData.GroupBy(x => x.No).Where(x => x.Count() > 1).ToList();
            if (duplicateNos.Any()) throw new Exception($"發現重複的No，無法匯入\r\n");

            //使用深度GroupBy，然後正序排序
            var dataGroupOrderedByDepth = createDataOrderedByDepth(sourceData);

            //紀錄已經產生的項目被分配到的Id是什麼，這樣才能設定ParentId
            //key: no,value: id
            var noIdDicionary = new Dictionary<string, Guid>();

            //使用BFS的順序產生資料
            foreach (var depthGroup in dataGroupOrderedByDepth)
            {
                await createBlogByDepth(context, noIdDicionary, depthGroup, virtualImageContentPath).ConfigureAwait(false);
            }
        }

        private static List<IGrouping<int, (BlogImportModel sourceData, int depth)>> createDataOrderedByDepth(List<BlogImportModel> sourceData)
        {
            return sourceData.Select(sourceData =>
            {
                var depth = sourceData.No.Split(".").Count();
                return (sourceData, depth);
            })
            .GroupBy(x => x.depth)
            .OrderBy(x => x.Key)
            .ToList();
        }

        private async Task createBlogByDepth(DataSeedContext context,
                                             Dictionary<string, Guid> noIdDicionary,
                                             IGrouping<int, (BlogImportModel sourceData, int depth)> depthGroup,
                                             string virtualImageContentPath)
        {
            int sequence = 0;
            foreach (var data in depthGroup)
            {
                var item = data.sourceData;

                Blog blog = new Blog();

                //basic properties
                {
                    blog.No = item.No;
                    blog.DisplayName = item.DisplayName;
                    blog.Description = item.Description;
                    blog.Disable = false;
                    blog.Sequence = sequence;
                    blog.Static = item.Static;
                    blog.TenantId = context.TenantId;
                    if (data.depth != 1)
                    {
                        var parentNo = blog.No.Substring(0, blog.No.LastIndexOf("."));
                        blog.ParentId = noIdDicionary[parentNo];
                    }
                }
                //images
                {
                    var directoryPath = $"{virtualImageContentPath}/{item.No.Replace('.', '/')}";
                    var imageFiles = await createImagesFromDirectory(directoryPath, item,context);
                    var imageLists = new List<Core.Resource>();
                    foreach (var imagefile in imageFiles)
                    {
                        var resource = new Core.Resource()
                        {
                            FileId = imagefile.Id.ToString(),
                            No = item.No,
                            Default = true,
                        };

                        imageLists.Add(resource);
                    }
                    blog.Images = imageLists;
                }

                EntityHelper.TrySetId(blog, () => this._guidGenerator.Create(), true);

                noIdDicionary.Add(blog.No, blog.Id);

                await this._blogsStore.Blog.InsertAsync(blog, true).ConfigureAwait(false);

                sequence++;
            }
        }

        //TODO:重構，這裡和post很像
        async Task<List<FileDescriptor>> createImagesFromDirectory(string directoryPath, BlogImportModel data,DataSeedContext context)
        {
            var directoryContent = _virtualFileProvider.GetDirectoryContents(directoryPath);

            if (!directoryContent.Exists) return new List<FileDescriptor>();

            var imgFiles = directoryContent.Where(x => !x.IsDirectory && isImg(x.Name)).ToList();

            var results = new List<FileDescriptor>();
            foreach (var file in imgFiles)
            {
                Console.WriteLine($"[CmsBlog]Blog({data.No} {data.DisplayName})找到圖片{file.Name}");
                var webSiteDefinitionDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Cms.Blogs")).Last();
                var descriptor = await _fileGeneraterManager.CreateFile(file.CreateReadStream(),
                                                                        webSiteDefinitionDirectory.Id,
                                                                        data.No + "." + file.Name,
                                                                        context.TenantId);
                results.Add(descriptor);
            }

            return results;
        }

        //TODO:重構，這邊和post重複了
        private static bool isImg(string filename)
        {
            var type=new Regex(@"^.*\.(jpg|jpeg|png|gif)$", RegexOptions.IgnoreCase);
            return type.IsMatch(filename);
        }
    }
}