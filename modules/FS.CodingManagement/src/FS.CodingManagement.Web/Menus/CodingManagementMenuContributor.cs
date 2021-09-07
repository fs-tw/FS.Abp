using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.CodingManagement.Web.Menus
{
    public class CodingManagementMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(CodingManagementMenus.Prefix, displayName: "CodingManagement", "~/CodingManagement", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}