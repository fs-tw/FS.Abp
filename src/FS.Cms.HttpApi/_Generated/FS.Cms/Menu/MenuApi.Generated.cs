﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;

namespace FS.Cms.Menu
{
    [Area("cms")]
    [RemoteService(true)]
    [ControllerName("FS.Cms.Menu(cms)")]
    [Route("api/cms/menu")]
    public partial class MenuApi : CmsController //auto-generated IMenuApi
    {
        IMenuAppService _MenuAppService;
        protected IMenuAppService MenuAppService => this.LazyGetRequiredService(ref _MenuAppService);


    }
}
