using FS.CmsKitManagement.Routes.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.Routes
{
    public partial class RoutesApi : IRoutesApi
    {
        [HttpGet]
        [Route("route-definitions")]
        public async Task<List<RouteDefinitionDto>> GetRouteDefinitionsAsync()
        {
            return await Mediator.Send(new Querys.RouteDefinitions.Query());
        }

        [HttpGet]
        [Route("routes/{routeDefinitionId}")]
        public async Task<List<RouteDto>> GetRoutesAsync(Guid routeDefinitionId)
        {
            return await Mediator.Send(new Querys.Routes.Query(routeDefinitionId));
        }
    }
}