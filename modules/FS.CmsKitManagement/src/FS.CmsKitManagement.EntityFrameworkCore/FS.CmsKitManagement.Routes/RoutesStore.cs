using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.Routes
{
    public partial class RoutesStore : DomainService, IRoutesStore
    {
        //public async Task<List<Route>> GetRouteWithDescendantsAsync(Guid id)
        //{
        //    var route = await this.Route.GetAsync(id);
        //    var result = await this.AsyncExecuter.ToListAsync(this.Route
        //        .Where(x => x.Code.StartsWith(route.Code)));

        //    return result;
        //}
    }
}
