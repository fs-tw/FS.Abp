using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.ChartJs;
using Volo.Abp.Modularity;

namespace Volo.Abp.AuditLogging.Web.Pages.Shared.Components.AverageExecutionDurationPerDayWidget
{
    [DependsOn(typeof(ChartjsScriptContributor))]
    public class AuditLoggingAverageExecutionDurationPerDayWidgetScriptContributor : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            context.Files.Add("/Pages/Shared/Components/AverageExecutionDurationPerDayWidget/Default.js");
        }
    }
}