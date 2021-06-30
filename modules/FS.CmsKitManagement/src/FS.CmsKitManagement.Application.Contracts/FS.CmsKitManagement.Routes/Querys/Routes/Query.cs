using FS.CmsKitManagement.Routes.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CmsKitManagement.Routes.Querys.Routes
{
    public record Query(
        Guid RouteDefinitionId) :
        FS.Abp.MediatR.IQuery,
        MediatR.IRequest<List<RouteDto>>
    {

    }
}
