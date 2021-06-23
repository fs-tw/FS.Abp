using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.Blogs
{
    public partial interface IBlogsStore
    {
        Task DeletePostRouteByRouteIdAsync(Guid routeId);
    }
}
