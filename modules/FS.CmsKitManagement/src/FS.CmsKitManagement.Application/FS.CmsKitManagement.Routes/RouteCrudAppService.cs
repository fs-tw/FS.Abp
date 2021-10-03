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
    public partial class RouteCrudAppService
    {
        //public override async Task DeleteAsync(Guid id)
        //{
        //    await this.deleteRouteRelation(id);
        //    await base.DeleteAsync(id);
        //}

        //private async Task deleteRouteRelation(Guid routeId)
        //{
        //    var blogsStore = this.LazyServiceProvider.LazyGetRequiredService<IBlogsStore>();
        //    await blogsStore.DeletePostRouteByRouteIdAsync(routeId);
        //}
    }
}
