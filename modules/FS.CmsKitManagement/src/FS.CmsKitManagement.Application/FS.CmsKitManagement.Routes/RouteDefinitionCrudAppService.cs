using FS.CmsKitManagement.Blogs;
using FS.CmsKitManagement.Routes.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace FS.CmsKitManagement.Routes
{
    public partial class RouteDefinitionCrudAppService
    {
        public override async Task DeleteAsync(RouteDefinitionPrimaryKeyDto id)
        {
            await this.deleteRouteRelation(id.Id);
            await base.DeleteAsync(id);
        }

        private async Task deleteRouteRelation(Guid routeDefinitionId)
        {
            var routesStore = this.LazyServiceProvider.LazyGetRequiredService<IRoutesStore>();
            var blogsStore = this.LazyServiceProvider.LazyGetRequiredService<IBlogsStore>();

            var routeIds = await this.AsyncExecuter.ToListAsync(routesStore.Route
                .Where(x => x.RouteDefinitionId == routeDefinitionId)
                .Select(x => x.Id));

            foreach (var routeId in routeIds)
            {
                await blogsStore.DeletePostRouteByRouteIdAsync(routeId);
                await routesStore.Route.DeleteAsync(routeId);
            }
        }
    }
}
