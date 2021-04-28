using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.CmsKitManagement.Web.Menus
{
    public class CmsKitManagementMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(CmsKitManagementMenus.Prefix, displayName: "CmsKitManagement", "~/CmsKitManagement", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}