using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace Volo.Abp.LeptonTheme.Demo.Bundling
{
    public class LeptonDemoScriptBundleContributor : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            //TODO: Add custom styles here. Example:
            context.Files.AddIfNotContains("/Pages/_Layouts/SiteLayout.js");
        }
    }
}