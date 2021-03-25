using FS.Abp.File.Directories;
using FS.Abp.Files;
using FS.Abp.Npoi.Mapper;
using FS.Cms.Blogs;
using FS.Cms.Data.Model;
using FS.Cms.Posts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Guids;
using Volo.Abp.VirtualFileSystem;

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

        public async Task SeedAsync(DataSeedContext context, string virtualFilePath, string virtualContentFolderPath)
        {
            if (_postRepository.Any()) return;

            //結尾不能有"/"否則讀不到
            if (virtualContentFolderPath.Last() == '/') virtualContentFolderPath = virtualContentFolderPath.Substring(0, virtualContentFolderPath.Length - 1);

            try
            {
                var posts = _virtualFileNpoiReader.Read<PostImportModel>(virtualFilePath, "Post");

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
                var post = new Post();
                post.Title = data.Title;
                post.StartTime = DateTime.Parse(data.StartTime);
                if (!string.IsNullOrEmpty(data.EndTime)) post.EndTime = DateTime.Parse(data.EndTime);

                post.BlogId = noBlogIdDictionary[data.BlogNo.Trim()];

                post.TenantId = context.TenantId;

                EntityHelper.TrySetId(post, () => this._guidGenerator.Create(), true);

                //read and create file id
                var file = await createContentFileIdIfExists(virtualContentFolderPath, data);

                if (file != null)
                {
                    post.Contents = new List<Core.Resource>() {
                        new Core.Resource()
                        {
                            FileId=file.Id.ToString(),
                            No=data.BlogNo,
                            Default=true,
                        }
                    };
                }

                await _postRepository.InsertAsync(post);
            }

            async Task<Volo.FileManagement.Files.FileDescriptor> createContentFileIdIfExists(string virtualContentFolderPath, PostImportModel data)
            {
                var contentPath = $"{data.BlogNo.Replace('.', '/') }/{data.Title}.html";
                var contentFullPath = $"{virtualContentFolderPath}/{contentPath}";
                var fileInfo = _virtualFileProvider.GetFileInfo(contentFullPath);

                if (!fileInfo.Exists)
                {
                    Console.WriteLine($"[CmsPost]警告:找不到Post({data.BlogNo} {data.Title})的Content檔案(路徑:{contentFullPath})");
                    return null;
                }

                var webSiteDefinitionDirectory = (await this.directoriesManager.FindByProviderAsync("FS.Cms.Posts")).Last();

                return await _fileGeneraterManager.CreateFile(fileInfo.CreateReadStream(), webSiteDefinitionDirectory.Id, data.BlogNo + "." + data.Title, context.TenantId);
            }
        }
    }
}