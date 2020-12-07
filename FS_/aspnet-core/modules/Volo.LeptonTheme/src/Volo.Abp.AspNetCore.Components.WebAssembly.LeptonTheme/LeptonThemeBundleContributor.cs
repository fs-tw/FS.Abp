using System.Collections.Generic;
using Volo.Abp.Bundling;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme
{
    public class LeptonThemeBundleContributor : IBundleContributor
    {
        public void AddScripts(BundleContext context)
        {
            context.Add("_content/Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme/scripts/global.js");
        }

        public void AddStyles(BundleContext context)
        {
            context.Add("_content/Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme/styles/lepton1.css", new Dictionary<string, string>
            {
                { "id","LeptonStyle" }
            });
        }
    }
}
