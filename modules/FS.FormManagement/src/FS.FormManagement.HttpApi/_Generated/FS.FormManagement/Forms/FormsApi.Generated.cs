﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by YinChang.
// 4.2.2
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Volo.Abp;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.FormManagement.Forms
{
    [Area("form-management")]
    [RemoteService(true)]
    [ControllerName("FS.FormManagement.Forms(form-management)")]
    [Route("api/form-management/forms")]
    public partial class FormsApi : FormManagementController , IFormsApi //auto-generated
    {

        protected IFormalCrudAppService FormalCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IFormalCrudAppService>();

        protected IGroupCrudAppService GroupCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IGroupCrudAppService>();

        protected IItemCrudAppService ItemCrudAppService => this.LazyServiceProvider.LazyGetRequiredService<IItemCrudAppService>();

        [HttpOptions]
        public Dtos.MetaData Options()
        {
            return new Dtos.MetaData();
        }
    }
}
