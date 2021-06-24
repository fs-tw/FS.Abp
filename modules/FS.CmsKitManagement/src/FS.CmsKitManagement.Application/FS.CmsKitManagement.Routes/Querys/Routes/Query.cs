using FS.CmsKitManagement.Routes.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.Routes.Querys.Routes
{
    public class QueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<Query, List<RouteDto>>
    {

        public async Task<List<RouteDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var result = await this.AsyncExecuter.ToListAsync(this.RoutesStore.Route
                .Where(x => x.RouteDefinitionId == request.RouteDefinitionId)
                .OrderBy(x => x.Code));

            return ObjectMapper.Map<List<Route>, List<RouteDto>>(result);
        }
    }
}
