using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Settings.Blazor.Menus
{
    public class SettingsMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenuAsync(context);
            }
        }

        private Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            //Add main menu items.
            context.Menu.AddItem(new ApplicationMenuItem(SettingsMenus.Prefix, displayName: "Settings", "/Settings", icon: "fa fa-globe"));
            
            return Task.CompletedTask;
        }
    }
}