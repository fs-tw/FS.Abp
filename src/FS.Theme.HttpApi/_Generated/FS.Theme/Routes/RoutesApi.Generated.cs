﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;

namespace FS.Theme.Routes
{
    [Area("theme")]
    [RemoteService(true)]
    [ControllerName("FS.Theme.Routes(theme)")]
    [Route("api/theme/routes")]
    public partial class RoutesApi : ThemeController //auto-generated IRoutesApi
    {
        IRoutesAppService _RoutesAppService;
        protected IRoutesAppService RoutesAppService => this.LazyGetRequiredService(ref _RoutesAppService);

        IRouteDefinitionCrudAppService _RouteDefinitionCrudAppService;
        protected IRouteDefinitionCrudAppService RouteDefinitionCrudAppService => this.LazyGetRequiredService(ref _RouteDefinitionCrudAppService);

        IRouteCrudAppService _RouteCrudAppService;
        protected IRouteCrudAppService RouteCrudAppService => this.LazyGetRequiredService(ref _RouteCrudAppService);


    }
}
