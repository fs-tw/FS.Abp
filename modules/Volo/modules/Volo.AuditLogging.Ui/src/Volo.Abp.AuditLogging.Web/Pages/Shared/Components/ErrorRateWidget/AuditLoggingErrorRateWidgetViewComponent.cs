using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.ChartJs;
using Volo.Abp.AspNetCore.Mvc.UI.Widgets;

namespace Volo.Abp.AuditLogging.Web.Pages.Shared.Components.ErrorRateWidget
{
    [Widget(
        RequiredPolicies = new []{ AbpAuditLoggingPermissions.AuditLogs.Default },
        StyleTypes = new[] { typeof(ChartjsStyleContributor) },
        ScriptTypes = new[] { typeof(AuditLoggingErrorRateWidgetScriptContributor) }
        )]
    public class AuditLoggingErrorRateWidgetViewComponent : AuditLogsComponentBase
    {
        public virtual IViewComponentResult Invoke()
        {
            return View("/Pages/Shared/Components/ErrorRateWidget/Default.cshtml");
        }
    }
}