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
        public async Task<List<BlogDto>> GetAsync()
        {
            return await this.Mediator.Send(new Querys.Blogs.Query());
        }
        [HttpGet]
        [Route("blog-post/blog-slug/{blogSlug}")]
        public async Task<PagedResultDto<BlogPostDto>> GetBlogPostsAsync([NotNull] string blogSlug, PagedAndSortedResultRequestDto input)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.BlogQuery(blogSlug, input));
        }

        [HttpGet]
        [Route("blog-post/route/{routeId}")]
        public async Task<PagedResultDto<BlogPostDto>> GetBlogPostsAsync(Guid routeId, PagedAndSortedResultRequestDto input)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.RouteQuery(routeId, input));
        }

        [HttpGet]
        [Route("blog-post/slug/{blogSlug}/{blogPostSlug}")]
        public async Task<BlogPostDto> GetBlogPostBySlugAsync(string blogSlug, string blogPostSlug)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.SlugQuery(blogSlug, blogPostSlug));
        }

        [HttpGet]
        [Route("blog-post/admin/{id}")]
        [Authorize]
        public async Task<BlogPostDto> GetBlogPostByIdAsync(Guid id)
        {
            return await this.Mediator.Send(new Querys.BlogPosts.FindQuery(id));
        }

        [HttpPatch]
        [Route("blog-post/admin")]
        [Authorize]
        public async Task<BlogPostDto> PatchBlogPostAsync(PetchBlogPostDto input)
        {
            return await this.Mediator.Send(new Commands.BlogPosts.PatchCommand(input));
        }
    }
}
