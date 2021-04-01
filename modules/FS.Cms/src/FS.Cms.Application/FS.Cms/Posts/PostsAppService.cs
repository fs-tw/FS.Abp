using FS.Cms.Blogs;
using FS.Cms.Posts.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.Cms.Posts
{
    public class PostsAppService : CmsAppService, IPostsAppService
    {
        private IBlogsStore _blogsStore => this.LazyServiceProvider.LazyGetRequiredService<IBlogsStore>();
        private IPostsStore _postsStore => this.LazyServiceProvider.LazyGetRequiredService<IPostsStore>();

        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostsByBlogId(GetPostByBlogIdInput input, bool isFront = false)
        {
            var enableBlogIdsQuery = this._blogsStore.Blog
                .Where(x => x.Disable)
                .Select(x => x.Id);

            var query = (await this._postsStore.Post.WithDetailsAsync())
                .WhereIf(isFront, x => enableBlogIdsQuery.Contains(x.BlogId))
                .WhereIf(isFront, x => !x.Disable)
                .WhereIf(isFront, x => 
                    x.StartTime.Date <= DateTime.Now.Date && 
                    (!x.EndTime.HasValue || DateTime.Now.Date <= x.EndTime.Value.Date)
                )
                .WhereIf(input.BlogId.HasValue, x => x.BlogId == input.BlogId)
                .WhereIf(!String.IsNullOrEmpty(input.Keyword), x => x.Title.ToLower().Contains(input.Keyword.Trim().ToLower()));

            var totalCount = await this.AsyncExecuter.CountAsync(query);

            if (String.IsNullOrEmpty(input.Sorting)) input.Sorting = "sequence";

            var items = await this.AsyncExecuter.ToListAsync(query
                .OrderBy(input.Sorting)
                    .ThenBy(x => x.Sequence)
                .Skip(input.SkipCount)
                .Take(input.MaxResultCount));

            return new PagedResultDto<PostWithDetailsDto>()
            {
                TotalCount = totalCount,
                Items = ObjectMapper.Map<List<Post>, List<PostWithDetailsDto>>(items)
            };
        }


        

    }
}
