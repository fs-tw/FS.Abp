using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.MalihuCustomScrollbar;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.Modularity;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Bundling
{
    [DependsOn(
        typeof(MalihuCustomScrollbarPluginScriptBundleContributor),
        typeof(CommercialThemeScriptContributor)
    )]
    public class LeptonGlobalScriptContributor : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            var options = context
                .ServiceProvider
                .GetRequiredService<IOptions<LeptonThemeOptions>>()
                .Value;

            context.Files.AddIfNotContains("/Themes/Lepton/Global/scripts/app.js");

            if (options.EnableDemoFeatures)
            {
                context.Files.AddIfNotContains("/Themes/Lepton/Global/scripts/demo.js");
            }
        }
    }
}   