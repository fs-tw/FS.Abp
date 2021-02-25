using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Wbm.Blazor.Menus
{
    public class WbmMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(WbmMenus.Prefix, displayName: "Wbm", "/Wbm", icon: "fa fa-globe"));
            
            return Task.CompletedTask;
        }
    }
}