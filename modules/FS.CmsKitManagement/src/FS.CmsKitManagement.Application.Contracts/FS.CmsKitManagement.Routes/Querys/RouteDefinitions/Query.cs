using FS.CmsKitManagement.Routes.Dtos;
using System;
using System.Collections.Generic;
using System.Text;

namespace FS.CmsKitManagement.Routes.Querys.RouteDefinitions
{
    public class Query :
        FS.Abp.MediatR.IQuery,
        MediatR.IRequest<List<RouteDefinitionDto>>
    {

    }
}
