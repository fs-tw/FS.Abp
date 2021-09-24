using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.CmsKit.Blogs;

namespace FS.CmsKitManagement.Blogs
{
    public partial interface IBlogsStore
    {
        IBlogPostRepository BlogPost { get; }

        //Task PatchRoutesAsync(Guid postId, List<Guid> routeIds);

        //Task DeletePostRouteByRouteIdAsync(Guid routeId);
    }
}
