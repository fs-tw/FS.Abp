﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.4.3
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.CmsKitManagement.Contents
{
    [Area("cms-kit-management")]
    [RemoteService(Name ="cms-kit-management")]
    [ControllerName("FS.CmsKitManagement.Contents(cms-kit-management)")]
    [Route("api/cms-kit-management/contents")]
    public partial class ContentsApi : CmsKitManagementController , IContentsApi //auto-generated
    {

        protected IContentDefinitionCrudAppService ContentDefinitionCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IContentDefinitionCrudAppService>();

        protected IContentPropertyCrudAppService ContentPropertyCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IContentPropertyCrudAppService>();

        protected IEntityContentCrudAppService EntityContentCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IEntityContentCrudAppService>();

        protected IEntityContentDefinitionCrudAppService EntityContentDefinitionCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IEntityContentDefinitionCrudAppService>();

    }
}