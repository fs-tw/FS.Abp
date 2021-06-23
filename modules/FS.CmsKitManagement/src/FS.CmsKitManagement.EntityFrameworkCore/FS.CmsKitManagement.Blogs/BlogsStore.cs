using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.Blogs
{
    public partial class BlogsStore : DomainService, IBlogsStore
    {
        public async Task DeletePostRouteByRouteIdAsync(Guid routeId)
        {
            var deleteIds = await this.AsyncExecuter.ToListAsync(this.PostRoute
                .Where(x => x.RouteId == routeId)
                .Select(x => x.Id));

            await this.PostRoute.DeleteManyAsync(deleteIds);
        }
    }
}
