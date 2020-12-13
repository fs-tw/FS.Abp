using System.Threading.Tasks;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;
using Volo.Abp.LeptonTheme.Demo.Pages.Shared.Components.HeaderToolBarItems;

namespace Volo.Abp.LeptonTheme.Demo.Toolbars
{
    public class HeaderToolbarContributor : IToolbarContributor
    {
        public Task ConfigureToolbarAsync(IToolbarConfigurationContext context)
        {
            if (context.Toolbar.Name != StandardToolbars.Main)
            {
                return Task.CompletedTask;
            }

            context.Toolbar.Items.Add(new ToolbarItem(typeof(HeaderToolBarItemsViewComponent)));

            return Task.CompletedTask;
        }
    }
}
