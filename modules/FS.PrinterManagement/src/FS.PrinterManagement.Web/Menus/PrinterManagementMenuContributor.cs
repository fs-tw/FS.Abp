using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.PrinterManagement.Web.Menus
{
    public class PrinterManagementMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(PrinterManagementMenus.Prefix, displayName: "PrinterManagement", "~/PrinterManagement", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}