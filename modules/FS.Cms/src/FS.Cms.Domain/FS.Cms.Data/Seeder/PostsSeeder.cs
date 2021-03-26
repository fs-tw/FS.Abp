using FS.Abp.File.Directories;
using FS.Abp.Files;
using FS.Abp.Npoi.Mapper;
using FS.Cms.Blogs;
using FS.Cms.Data.Model;
using FS.Cms.Posts;
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
    public class PostsSeeder : ITransientDependency
    {
        public IGuidGenerator _guidGenerator { get; set; }
        public IVirtualFileNpoiReader _virtualFileNpoiReader { get; set; }
        public IPostRepository _postRepository { get; set; }
        public IBlogsStore _blogsStore { get; set; }

        public IVirtualFileProvider _virtualFileProvider { get; set; }

        public IFileGeneraterManager _fileGeneraterManager { get; set; }

        public IDirectoriesManager directoriesManager { get; set; }

        /// <summary>
        /// <para>匯入Post和圖片以及Content，詳細請參考DEMO範例Excel</para>
        /// <para>檔案放法:</para>
        /// <para>1.根據BlogNo和Post.Title產生資料夾，BlogNo有多層資料夾也要開多層</para>
        /// <para>例如BlogNo是 校園公告.A ，Post.Title是 廠商徵才公告 => 資料夾路徑為 校園公告/A/廠商徵才公告</para>
        /// <para>2.根據需求在剛剛的資料夾裡面產生子資料夾並放要匯入的檔案:</para>
        /// <para>a.如果有圖片，請產生Images資料夾，並放入圖檔(必須是jpg|jpeg|png|gif)</para>
        /// <para>b.如果有內文，請產生Contents資料夾，並放入檔案(必須是html)</para>
        /// <para>c.如果有附件，請產生Attachements資料夾，並放入檔案(任意副檔名皆可)</para>
        /// </summary>
        /// <param name="context"></param>
        /// <param name="virtualFilePath">Excel檔案路徑(virtual file)</param>
        /// <param name="virtualContentFolderPath">">匯入檔案的目錄(virtual file)，Content格式副檔名須為html。圖檔副檔名目前支援 jpg|jpeg|png|gif </param>
        /// <returns></returns>
        public async Task SeedAsync(DataSeedContext context, string virtualFilePath, string virtualContentFolderPath)
        {
            if (_postRepository.Any()) return;

            //結尾不能有"/"否則讀不到
            if (virtualContentFolderPath.Last() == '/') virtualContentFolderPath = virtualContentFolderPath.Substring(0, virtualContentFolderPath.Length - 1);

            try
            {
                var posts = _virtualFileNpoiReader.Read<PostImportModel>(virtualFilePath, "Post");

                posts.ForEach(x => x.BlogNo = x.BlogNo.Trim());

                await createPosts(context, posts, virtualContentFolderPath).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                throw new Exception("[CmsPost]匯入Post失敗:", ex);
            }
        }

        private async Task createPosts(DataSeedContext context, List<PostImportModel> sourceData, string virtualContentFolderPath)
        {
            if (!sourceData.Any()) return;

            var blogNos = sourceData.Select(x => x.BlogNo.Trim()).Distinct().ToList();

            var noBlogIdDictionary = (await _blogsStore.Blog.GetQueryableAsync()).Where(x => blogNos.Contains(x.No)).ToDictionary(x => x.No, x => x.Id);

            validateAllBlogNoExists(blogNos, noBlogIdDictionary);

            await createPosts(context, sourceData, noBlogIdDictionary, virtualContentFolderPath);
        }

        private static void validateAllBlogNoExists(List<string> blogNos, Dictionary<string, Guid> noBlogIdDictionary)
        {
            var nonExistNoList = new List<string>();
            foreach (var no in blogNos)
            {
                if (!noBlogIdDictionary.ContainsKey(no)) nonExistNoList.Add(no);
            }
            if (nonExistNoList.Any())
            {
                throw new Exception($"[CmsPost]錯誤:查無下列BlogNo，無法匯入Post\r\n{string.Join("\r\n", nonExistNoList)}");
            }
        }

        private async Task createPosts(DataSeedContext context,
                                       List<PostImportModel> sourceData,
                                       Dictionary<string, Guid> noBlogIdDictionary,
                                       string virtualContentFolderPath)
        {
            foreach (var data in sourceData)
            {
                Console.WriteLine($"[CmsPost] 匯入 {data.BlogNo} {data.Title}");
                var post = new Post();

                //basic properties
                {
                    post.Title = data.Title;
                    post.StartTime = DateTime.Parse(data.StartTime);
                    if (!string.IsNullOrEmpty(data.EndTime)) post.EndTime = DateTime.Parse(data.EndTime);
                    post.BlogId = noBlogIdDictionary[data.BlogNo.Trim()];
                    post.TenantId = context.TenantId;
                }

                //files
                {
                    var directoryPathImages = $"{virtualContentFolderPath}/{data.BlogNo.Replace('.', '/')}/{data.Title}/Images";
                    var directoryPathContents = $"{virtualContentFolderPath}/{data.BlogNo.Replace('.', '/')}/{data.Title}/Contents";
                    var directoryPathAttachments = $"{virtualContentFolderPath}/{data.BlogNo.Replace('.', '/')}/{data.Title}/Attachements";

                    Console.WriteLine($"[CmsPost] 開始匯入Images");
                    post.Images = await cretaeResourceFromFolder(context, data, directoryPathImages, isImg);

                    Console.WriteLine($"[CmsPost] 開始匯入Contents");
                    post.Contents = await cretaeResourceFromFolder(context, data, directoryPathContents, isHtml);

                    Console.WriteLine($"[CmsPost] 開始匯入Attachments");
                    post.Attachments = await cretaeResourceFromFolder(context, data, directoryPathAttachments);

                    Console.WriteLine($"[CmsPost] 所有檔案匯入完成");
                }

                EntityHelper.TrySetId(post, () => this._guidGenerator.Create(), true);

                await _postRepository.InsertAsync(post);
            }

            async Task<List<Core.Resource>> cretaeResourceFromFolder(DataSeedContext context, PostImportModel data, string directoryPath, Func<string, bool> fileNameFilter = null)
            {
                List<FileDescriptor> files = await createFileFromDirectory(directoryPath, data, fileNameFilter);
                List<Core.Resource> fileLists = createResources(data, files);

                return fileLists;
            }
            //TODO:重構，這裡和blog很像
            async Task<List<FileDescriptor>> createFileFromDirectory(string directoryPath, PostImportModel data, Func<string, bool> fileNameFilter = null)
            {
                var directoryContent = _virtualFileProvider.GetDirectoryContents(directoryPath);

                if (!directoryContent.Exists) return new List<FileDescriptor>();

                var files = directoryContent.Where(x => !x.IsDirectory).ToList();
                if (fileNameFilter != null) files = files.Where(x => fileNameFilter(x.Name)).ToList();

                var results = new List<FileDescriptor>();
                foreach (var file in files)
                {
                    Console.WriteLine($"[CmsPost] 找到檔案 {file.Name}");
                    var webSiteDefinitionDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Cms.Posts")).Last();
                    var descriptor = await _fileGeneraterManager.CreateFile(file.CreateReadStream(), webSiteDefinitionDirectory.Id, data.BlogNo + "." + file.Name, context.TenantId);
                    results.Add(descriptor);
                }

                return results;
            }
            static List<Core.Resource> createResources(PostImportModel data, List<FileDescriptor> files)
            {
                var fileLists = new List<Core.Resource>();
                foreach (var file in files)
                {
                    var resource = new Core.Resource()
                    {
                        FileId = file.Id.ToString(),
                        No = data.BlogNo,
                        Default = true,
                    };

                    fileLists.Add(resource);
                }

                return fileLists;
            }
        }

        //TODO:重構，這邊和blog重複了
        private static bool isImg(string filename)
        {
            var type = new Regex(@"^.*\.(jpg|jpeg|png|gif)$", RegexOptions.IgnoreCase);
            return type.IsMatch(filename);
        }

        private static bool isHtml(string filename)
        {
            var type = new Regex(@"^.*\.html$", RegexOptions.IgnoreCase);
            return type.IsMatch(filename);
        }
    }
}