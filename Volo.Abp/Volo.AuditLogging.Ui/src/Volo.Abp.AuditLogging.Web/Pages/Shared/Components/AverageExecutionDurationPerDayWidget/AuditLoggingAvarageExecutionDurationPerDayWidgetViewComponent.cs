using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.ChartJs;
using Volo.Abp.AspNetCore.Mvc.UI.Widgets;

namespace Volo.Abp.AuditLogging.Web.Pages.Shared.Components.AverageExecutionDurationPerDayWidget
{
    [Widget(
        RequiredPolicies = new[] { AbpAuditLoggingPermissions.AuditLogs.Default },
        StyleTypes = new[] { typeof(ChartjsStyleContributor) },
        ScriptTypes = new[] { typeof(AuditLoggingAverageExecutionDurationPerDayWidgetScriptContributor) }
        )]
    public class AuditLoggingAverageExecutionDurationPerDayWidgetViewComponent : AuditLogsComponentBase
    {
        public virtual IViewComponentResult Invoke()
        {
            return View("/Pages/Shared/Components/AverageExecutionDurationPerDayWidget/Default.cshtml");
        }
    }
}