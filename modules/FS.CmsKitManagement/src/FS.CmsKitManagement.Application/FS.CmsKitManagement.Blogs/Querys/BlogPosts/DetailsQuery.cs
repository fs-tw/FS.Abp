using FS.CmsKitManagement.Blogs.Dtos;
using FS.CmsKitManagement.Routes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.CmsKit.Admin.MediaDescriptors;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.MediaDescriptors;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public record DetailsQuery(List<BlogPost> blogPosts) : MediatR.IRequest<List<BlogPostDto>>
    {
    }
    public class DetailsQueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<DetailsQuery, List<BlogPostDto>>
    {
        public async Task<List<BlogPostDto>> Handle(DetailsQuery request, CancellationToken cancellationToken)
        {
            var BlogRepository = this.LazyServiceProvider.LazyGetRequiredService<IBlogRepository>();

            var blogs = (await BlogRepository.GetListAsync()).ToDictionary(x => x.Id);

            var blogPostIds = request.blogPosts.Select(x => x.Id).ToList();

            var routes = await this.AsyncExecuter.ToListAsync(BlogsStore.PostRoute
                .Where(x => blogPostIds.Contains(x.PostId))
                .Join(RoutesStore.Route,
                    a => a.RouteId,
                    b => b.Id,
                    (a, b) => new
                    {
                        PostRoute = a,
                        Route = b
                    })
                );

            var attachmentMediaIds = request.blogPosts
                .Where(x => x.ExtraProperties.ContainsKey("AttachmentMediaIds"))
                .SelectMany(x => x.GetAttachmentMediaIds())
                .ToList();
            var attachmentMedias = await MediaDescriptorsStore.GetMediaDescriptorsAsync(attachmentMediaIds);

            var dtoList = request.blogPosts.Select(x =>
            {
                var dtoRoutes = routes.Where(y => y.PostRoute.PostId == x.Id).Select(x => x.Route).ToList();
                var postAttachmentMedias = x.ExtraProperties.ContainsKey("AttachmentMediaIds") ?
                    attachmentMedias.Where(y => x.GetAttachmentMediaIds().Contains(y.Id)).ToList() :
                    new List<MediaDescriptor>();

                var dto = ObjectMapper.Map<BlogPost, BlogPostDto>(x);
                dto.BlogName = blogs.ContainsKey(x.BlogId) ? blogs[x.BlogId].Name : null;
                dto.BlogSlug = blogs.ContainsKey(x.BlogId) ? blogs[x.BlogId].Slug : null;
                dto.Routes = ObjectMapper.Map<List<Route>, List<Routes.Dtos.RouteDto>>(dtoRoutes);
                dto.AttachmentMedias = ObjectMapper.Map<List<MediaDescriptor>, List<MediaDescriptorDto>>(postAttachmentMedias);
                return dto;
            }).ToList();

            return dtoList;
        }
    }
}
