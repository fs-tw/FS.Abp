using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.ChartJs;
using Volo.Abp.Modularity;

namespace Volo.Abp.AuditLogging.Web.Pages.Shared.Components.ErrorRateWidget
{
    [DependsOn(typeof(ChartjsScriptContributor))]
    public class AuditLoggingErrorRateWidgetScriptContributor : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            context.Files.Add("/Pages/Shared/Components/ErrorRateWidget/Default.js");
        }
    }
}