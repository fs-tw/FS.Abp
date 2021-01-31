using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.LineNotify.Blazor.Menus
{
    public class LineNotifyMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(LineNotifyMenus.Prefix, displayName: "LineNotify", "~/LineNotify", icon: "fa fa-globe"));
            
            return Task.CompletedTask;
        }
    }
}