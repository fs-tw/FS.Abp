﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.1
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Theme.Banners
{
    [Area("theme")]
    [RemoteService(true)]
    [ControllerName("FS.Theme.Banners(theme)")]
    [Route("api/theme/banners")]
    public partial class BannersApi : ThemeController , IBannersApi //auto-generated
    {

        protected IBannerDefinitionCrudAppService BannerDefinitionCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IBannerDefinitionCrudAppService>();

        protected IBannerCrudAppService BannerCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IBannerCrudAppService>();

        [HttpOptions]
        public Dtos.MetaData Options()
        {
            return new Dtos.MetaData();
        }
    }
}
