using System.Collections.Generic;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Libraries.JsTree
{
    public class LeptonJsTreeStyleContributorExtension : BundleContributor
    {
        public override void ConfigureBundle(BundleConfigurationContext context)
        {
            context.Files.AddIfNotContains("/Themes/Lepton/Libraries/JsTree/default/style.css");
        }
    }
}
