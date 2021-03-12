using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.FormManagement.Blazor.Menus
{
    public class FormManagementMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(FormManagementMenus.Prefix, displayName: "FormManagement", "/FormManagement", icon: "fa fa-globe"));
            
            return Task.CompletedTask;
        }
    }
}