using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.ChartJs;
using Volo.Abp.AspNetCore.Mvc.UI.Widgets;
using Volo.Abp.Modularity;

namespace Volo.Saas.Host.Pages.Shared.Components.SaasEditionPercentageWidget
{
    [Widget(
        RequiredPolicies = new[] { SaasHostPermissions.Tenants.Default },
        StyleTypes = new[] { typeof(ChartjsStyleContributor) },
        ScriptTypes = new[] { typeof(SaasEditionPercentageWidgetScriptContributor) }
    )]
    public class SaasEditionPercentageWidgetViewComponent : SaasHostViewComponent
    {
        public virtual async Task<IViewComponentResult> InvokeAsync()
        {
            return View("/Pages/Shared/Components/SaasEditionPercentageWidget/Default.cshtml");
        }
    }

    [DependsOn(typeof(ChartjsScriptContributor))]
    public class SaasEditionPercentageWidgetScriptContributor : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            context.Files.Add("/Pages/Shared/Components/SaasEditionPercentageWidget/Default.js");
        }
    }
}
