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

namespace FS.Cms.Data.Seeder
{
    public class PostsSeeder : ITransientDependency
    {
        public IGuidGenerator _guidGenerator { get; set; }
        public IVirtualFileNpoiReader _virtualFileNpoiReader { get; set; }
        public IPostRepository _postRepository { get; set; }
        public IBlogsStore _blogsStore { get; set; }

        public async Task SeedAsync(DataSeedContext context, string virtualFilePath)
        {
            if (_postRepository.Any()) return;

            try
            {
                var posts = _virtualFileNpoiReader.Read<PostImportModel>(virtualFilePath, "Post");

                await createPosts(context, posts).ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                throw new Exception("[CmsPost]匯入Post失敗:", ex);
            }
        }

        private async Task createPosts(DataSeedContext context, List<PostImportModel> sourceData)
        {
            if (!sourceData.Any()) return;

            var blogNos = sourceData.Select(x => x.BlogNo.Trim()).Distinct().ToList();

            var noBlogIdDictionary = (await _blogsStore.Blog.GetQueryableAsync()).Where(x => blogNos.Contains(x.No)).ToDictionary(x => x.No, x => x.Id);

            validateAllBlogNoExists(blogNos, noBlogIdDictionary);

            await createPosts(context, sourceData, noBlogIdDictionary);
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

        private async Task createPosts(DataSeedContext context, List<PostImportModel> sourceData, Dictionary<string, Guid> noBlogIdDictionary)
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

                await _postRepository.InsertAsync(post);
            }
        }
    }
}