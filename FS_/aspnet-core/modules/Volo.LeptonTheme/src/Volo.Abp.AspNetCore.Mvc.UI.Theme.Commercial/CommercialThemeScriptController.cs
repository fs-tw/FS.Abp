using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Bundling;
using Volo.Abp.Modularity;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial
{
    [DependsOn(
        typeof(SharedThemeGlobalScriptContributor)
        )]
    public class CommercialThemeScriptContributor : BundleContributor
    {
        //No content, just for dependency to the SharedThemeGlobalScriptContributor for now
    }
}
