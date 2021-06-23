using FS.CmsKitManagement.Blogs.Dtos;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs.Commands.BlogPosts
{
    public class PatchCommandHandler : CmsKitManagementAppService, MediatR.IRequestHandler<PatchCommand, BlogPostDto>
    {
        public async Task<BlogPostDto> Handle(PatchCommand request, CancellationToken cancellationToken)
        {
            var domain = ObjectMapper.Map<BlogPostDto, BlogPost>(request.input.BlogPost);
            var blogPost = await this.BlogsStore.PatchBlogPostAsync(domain, request.input.RouteIds, this.CurrentUser.Id.Value);

            var result = (await this.Mediator.Send(new Blogs.Querys.BlogPosts.DetailsQuery(new List<BlogPost>() { blogPost })))
                .Single();
            return result;
        }
    }
}
