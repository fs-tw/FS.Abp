using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Services;
using Volo.Abp.ObjectMapping;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs
{
    public partial class BlogsStore : DomainService, IBlogsStore
    {
        public IBlogPostRepository BlogPost => this.LazyServiceProvider.LazyGetRequiredService<IBlogPostRepository>();


        public async Task DeletePostRouteByRouteIdAsync(Guid routeId)
        {
            var deleteIds = await this.AsyncExecuter.ToListAsync(this.PostRoute
                .Where(x => x.RouteId == routeId)
                .Select(x => x.Id));

            await this.PostRoute.DeleteManyAsync(deleteIds);
        }

        public async Task PatchRoutesAsync(Guid postId, List<Guid> routeIds)
        {

            var postRoutes = await this.AsyncExecuter.ToListAsync(this.PostRoute
                .Where(x => x.PostId == postId));

            // 過去有 現在沒有
            var deleteRouteIds = postRoutes
                .Where(x => !routeIds.Contains(x.RouteId))
                .Select(x => x.Id)
                .ToList();

            // 現在有 過去沒有
            var createIds = routeIds
                .Where(x => !postRoutes.Select(y => y.RouteId).Contains(x));

            foreach (var id in deleteRouteIds)
            {
                await this.PostRoute.DeleteAsync(id);
            }

            var createPostRoutes = new List<PostRoute>();
            foreach (var routeId in createIds)
            {
                var domain = new PostRoute()
                {
                    PostId = postId,
                    RouteId = routeId
                };

                EntityHelper.TrySetId(domain, this.GuidGenerator.Create);
                createPostRoutes.Add(domain);
            }

            await this.PostRoute.InsertManyAsync(createPostRoutes);
        }

    }
}
