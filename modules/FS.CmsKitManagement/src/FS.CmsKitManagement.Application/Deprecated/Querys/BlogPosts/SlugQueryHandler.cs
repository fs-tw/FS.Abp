using FS.CmsKitManagement.Blogs.Dtos;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public class SlugQueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<SlugQuery, BlogPostDto>
    {
        public async Task<BlogPostDto> Handle(SlugQuery request, CancellationToken cancellationToken)
        {
            var blogRepository = this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();
            var blogPostRepository = this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();
            var blog = await blogRepository.GetBySlugAsync(request.blogSlug);

            var blogPost = await blogPostRepository.GetBySlugAsync(blog.Id, request.blogPostSlug);
            var result = (await this.Mediator.Send(new DetailsQuery(new List<BlogPost>() { blogPost }))).Single();

            return result;
        }
    }
}
