using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout;
using Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.MainHeader;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Toolbars;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme
{
    public class LeptonThemeToolbarContributor : IToolbarContributor
    {
        public Task ConfigureToolbarAsync(IToolbarConfigurationContext context)
        {
            if (context.Toolbar.Name == StandardToolbars.Main)
            {
                context.Toolbar.Items.Add(new ToolbarItem(typeof(MainHeaderToolbarLanguageSwitch)));
                context.Toolbar.Items.Add(new ToolbarItem(typeof(MainHeaderToolbarUserMenu)));
            }

            return Task.CompletedTask;
        }
    }
}
