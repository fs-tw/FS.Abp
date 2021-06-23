using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.Routes
{
    public partial interface IRoutesStore
    {
        Task<List<Route>> GetRouteWithDescendantsAsync(Guid id);
    }
}
