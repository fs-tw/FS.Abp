using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using System.Threading.Tasks;
using FS.Cms.Posts.Dtos;

namespace FS.Cms.Posts
{
    public partial class PostsApi : IPostsApi
    {
        protected IPostsAppService PostAppService => this.LazyServiceProvider.LazyGetRequiredService<IPostsAppService>();

        [HttpGet]
        [Route("get-posts-by-blog-id")]
        public async Task<PagedResultDto<PostWithDetailsDto>> GetPostsByBlogId(GetPostByBlogIdInput input)
        {
            return await this.PostAppService.GetPostsByBlogId(input);
        }

        [HttpGet]
        [Route("get-front-posts-by-blog-id")]
        public async Task<PagedResultDto<PostWithDetailsDto>> GetFrontPostsByBlogId(GetPostByBlogIdInput input)
        {
            return await this.PostAppService.GetPostsByBlogId(input, true);
        }

    }
}