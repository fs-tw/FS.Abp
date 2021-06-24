using JetBrains.Annotations;
using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;

namespace FS.CmsKitManagement.Blogs
{
    public partial interface IBlogsApi
    {
        Task<List<BlogDto>> GetAsync();

        Task<PagedResultDto<BlogPostDto>> GetBlogPostsAsync([NotNull] string blogSlug, PagedAndSortedResultRequestDto input);
        Task<PagedResultDto<BlogPostDto>> GetBlogPostsAsync(Guid routeId, PagedAndSortedResultRequestDto input);
        Task<BlogPostDto> GetBlogPostBySlugAsync(string blogSlug, string blogPostSlug);


        Task<BlogPostDto> GetBlogPostByIdAsync(Guid id);
        Task<BlogPostDto> PatchBlogPostAsync(PetchBlogPostDto input);
    }
}
