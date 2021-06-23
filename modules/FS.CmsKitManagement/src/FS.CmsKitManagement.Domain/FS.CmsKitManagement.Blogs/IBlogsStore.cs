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
        Task<BlogPost> PatchBlogPostAsync(BlogPost blogPost, List<Guid> routeIds, Guid userId);

        Task DeletePostRouteByRouteIdAsync(Guid routeId);
    }
}
