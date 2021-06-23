using FS.CmsKitManagement.Routes.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.Routes.Querys.RouteDefinitions
{
    public class QueryHandler : CmsKitManagementAppService, MediatR.IRequestHandler<Query, List<RouteDefinitionDto>>
    {

        public async Task<List<RouteDefinitionDto>> Handle(Query request, CancellationToken cancellationToken)
        {
            var result = await this.RoutesStore.RouteDefinition.GetListAsync();
            result = result.OrderBy(x => x.No).ToList();
            return ObjectMapper.Map<List<RouteDefinition>, List<RouteDefinitionDto>>(result);
        }
    }
}
