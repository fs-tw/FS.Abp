using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Localization;
using Volo.Abp.AuditLogging.Localization;

namespace Volo.Abp.AuditLogging.Web.Pages.Shared.Components.EntityChangeWidget
{
    public class EntityChangeWidgetViewComponent : AuditLogsComponentBase
    {
        public virtual IViewComponentResult Invoke(IEnumerable<EntityChangeWithUsernameDto> entityChanges)
        {
            return View("/Pages/Shared/Components/EntityChangeWidget/Default.cshtml", entityChanges.ToList());
        }
    }
}