using FS.CmsKitManagement.Blogs.Dtos;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public class FindQueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<FindQuery, BlogPostDto>
    {
        public async Task<BlogPostDto> Handle(FindQuery request, CancellationToken cancellationToken)
        {
            var blogPostRepository = this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();
            var blogPost = await blogPostRepository.GetAsync(request.id);
            var result = (await this.Mediator.Send(new DetailsQuery(new List<BlogPost>() { blogPost }))).Single();

            return result;
        }
    }
}
