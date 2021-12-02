using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Metadata.Web.Menus
{
    public class MetadataMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(MetadataMenus.Prefix, displayName: "Metadata", "~/Metadata", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}