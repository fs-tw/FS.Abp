﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.3.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.CmsKitManagement.Routes
{
    [Area("cms-kit-management")]
    [RemoteService(Name ="cms-kit-management")]
    [ControllerName("FS.CmsKitManagement.Routes(cms-kit-management)")]
    [Route("api/cms-kit-management/routes")]
    public partial class RoutesApi : CmsKitManagementController , IRoutesApi //auto-generated
    {

        protected IRouteCrudAppService RouteCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IRouteCrudAppService>();

        protected IRouteDefinitionCrudAppService RouteDefinitionCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IRouteDefinitionCrudAppService>();

    }
}
