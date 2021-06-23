using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public class BlogQueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<BlogQuery, PagedResultDto<BlogPostDto>>
    {
        public async Task<PagedResultDto<BlogPostDto>> Handle(BlogQuery request, CancellationToken cancellationToken)
        {
            var blogRepository = this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();
            var blogPostRepository = this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();
            if (String.IsNullOrEmpty(request.input.Sorting)) request.input.Sorting = "CreationTime desc";

            var blogs = (await blogRepository.GetListAsync()).ToDictionary(x => x.Id);
            var blog = blogs.LastOrDefault(x => x.Value.Slug == request.blogSlug).Value;
            var blogPosts = await blogPostRepository.GetListAsync(null, blog.Id, request.input.MaxResultCount, request.input.SkipCount, request.input.Sorting);

            var dtoList = (await this.Mediator.Send(new DetailsQuery(blogPosts)));

            return new PagedResultDto<BlogPostDto>(
                            await blogPostRepository.GetCountAsync(blogId: blog.Id),
                            dtoList);
        }
    }
}
