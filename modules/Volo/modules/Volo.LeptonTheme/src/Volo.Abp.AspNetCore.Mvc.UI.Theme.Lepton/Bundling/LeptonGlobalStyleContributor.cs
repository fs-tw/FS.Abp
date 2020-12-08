using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.FlagIconCss;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.MalihuCustomScrollbar;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Modularity;
using Volo.Abp.Settings;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Bundling
{
    [DependsOn(
        typeof(MalihuCustomScrollbarPluginStyleBundleContributor),
        typeof(FlagIconCssStyleContributor)
        )]
    public class LeptonGlobalStyleContributor : BundleContributor
    {
        public async override Task ConfigureBundleAsync(BundleConfigurationContext context)
        {
            var cssFile = await GetStyleCssFileNameAsync(context);
            context.Files.Add($"/Themes/Lepton/Global/Styles/{cssFile}");
        }

        private async Task<string> GetStyleCssFileNameAsync(BundleConfigurationContext context)
        {
            var style = await context.ServiceProvider
                .GetRequiredService<ISettingProvider>()
                .GetOrNullAsync(LeptonThemeSettingNames.Style);

            if (string.Equals(style, LeptonStyle.Style1.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                return "lepton1.css";
            }
            else if (string.Equals(style, LeptonStyle.Style2.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                return "lepton2.css";
            }
            else if (string.Equals(style, LeptonStyle.Style3.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                return "lepton3.css";
            }
            else if (string.Equals(style, LeptonStyle.Style4.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                return "lepton4.css";
            }
            else if (string.Equals(style, LeptonStyle.Style5.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                return "lepton5.css";
            }
            else if (string.Equals(style, LeptonStyle.Style6.ToString(), StringComparison.OrdinalIgnoreCase))
            {
                return "lepton6.css";
            }

            return "lepton1.css";
        }
    }
}
