using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Collections.Generic;
using FS.CmsKitManagement.Blogs.Dtos;
using JetBrains.Annotations;
using Volo.Abp.Application.Dtos;
using System;
using Microsoft.AspNetCore.Authorization;

namespace FS.CmsKitManagement.Blogs
{
    public partial class BlogsApi : IBlogsApi
    {
        [HttpGet]
        [Route("blog")]
        [NonAction][RemoteService(false)]
        public async Task<List<BlogDto>> GetAsync()
        {
            return await this.Mediator.Send(new Querys.Blogs.Query());
        }
        [HttpGet]
        [Route("blog-post/blog-slug/{blogSlug}")]
        [NonAction]
        [RemoteService(false)]
        public async Task<PagedResultDto<BlogPostDto>> GetBlogPostsAsync([NotNull] string blogSlug, PagedAndSortedResultRequestDto input)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.BlogQuery(blogSlug, input));
        }

        [HttpGet]
        [Route("blog-post/route/{routeId}")]
        [NonAction]
        [RemoteService(false)]
        public async Task<PagedResultDto<BlogPostDto>> GetBlogPostsAsync(Guid routeId, PagedAndSortedResultRequestDto input)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.RouteQuery(routeId, input));
        }

        [HttpGet]
        [Route("blog-post/slug/{blogSlug}/{blogPostSlug}")]
        [NonAction]
        [RemoteService(false)]
        public async Task<BlogPostDto> GetBlogPostBySlugAsync(string blogSlug, string blogPostSlug)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.SlugQuery(blogSlug, blogPostSlug));
        }

        [HttpGet]
        [Route("blog-post/admin/{id}")]
        [Authorize]
        [NonAction]
        [RemoteService(false)]
        public async Task<BlogPostDto> GetBlogPostByIdAsync(Guid id)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.FindQuery(id));
        }

        [HttpPatch]
        [Route("blog-post/admin")]
        [Authorize]
        [NonAction]
        [RemoteService(false)]
        public async Task<BlogPostDto> PatchBlogPostAsync(PetchBlogPostDto input)
        {
            return await this.Mediator.Send(new Commands.BlogPosts.PatchCommand(input));
        }
    }
}
