using FS.CmsKitManagement.Routes.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.Routes
{
    public partial interface IRoutesApi
    {
        Task<List<RouteDefinitionDto>> GetRouteDefinitionsAsync();

        Task<List<RouteDto>> GetRoutesAsync(Guid routeDefinitionId);
    }
}
