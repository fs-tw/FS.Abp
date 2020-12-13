using System.Threading.Tasks;
using FS.Theme.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.Theme.Blazor.Menus
{
    public class ThemeMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenuAsync(context);
            }
        }

        private static async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            //Add main menu items.
            var l = context.GetLocalizer<ThemeResource>();

            await Task.CompletedTask;
        }
    }
}