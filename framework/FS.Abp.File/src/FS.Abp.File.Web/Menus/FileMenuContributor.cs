using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.File.Web.Menus
{
    public class FileMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(FileMenus.Prefix, displayName: "File", "~/File", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}