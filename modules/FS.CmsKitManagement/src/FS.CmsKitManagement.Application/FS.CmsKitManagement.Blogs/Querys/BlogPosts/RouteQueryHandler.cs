using FS.CmsKitManagement.Blogs.Dtos;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.CmsKit.Blogs;
using System.Linq.Dynamic.Core;

namespace FS.CmsKitManagement.Blogs.Querys.BlogPosts
{
    public class RouteQueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<RouteQuery, PagedResultDto<BlogPostDto>>
    {
        public async Task<PagedResultDto<BlogPostDto>> Handle(RouteQuery request, CancellationToken cancellationToken)
        {
            var blogPostsQuery = (IQueryable<BlogPost>)this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();

            if (String.IsNullOrEmpty(request.input.Sorting)) request.input.Sorting = "CreationTime desc";

            var routes = await this.RoutesStore.GetRouteWithDescendantsAsync(request.routeId);
            var routeIds = routes.Select(x => x.Id).ToList();
            var blogPostIds = await this.AsyncExecuter.ToListAsync(this.BlogsStore.PostRoute
                .Where(x => routeIds.Contains(x.RouteId))
                .Select(x => x.PostId)
                .Distinct());

            blogPostsQuery = blogPostsQuery.Where(x => blogPostIds.Contains(x.Id));

            var blogPosts = await this.AsyncExecuter.ToListAsync(blogPostsQuery
                .OrderBy(request.input.Sorting)
                .Skip(request.input.SkipCount)
                .Take(request.input.MaxResultCount));

            var dtoList = await this.Mediator.Send(new DetailsQuery(blogPosts));

            return new PagedResultDto<BlogPostDto>(
                            await this.AsyncExecuter.CountAsync(blogPostsQuery),
                            dtoList);
        }
    }
}
