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

namespace FS.CmsKitManagement.Blogs
{
    [Area("cms-kit-management")]
    [RemoteService(true)]
    [ControllerName("FS.CmsKitManagement.Blogs(cms-kit-management)")]
    [Route("api/cms-kit-management/blogs")]
    public partial class BlogsApi : CmsKitManagementController , IBlogsApi //auto-generated
    {

        protected IBlogPostSettingAppService BlogPostSettingAppService => this.LazyServiceProvider.LazyGetRequiredService<IBlogPostSettingAppService>();

        protected IPostRouteCrudAppService PostRouteCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IPostRouteCrudAppService>();

        [HttpOptions]
        public Dtos.MetaData Options()
        {
            return new Dtos.MetaData();
        }
    }
}
