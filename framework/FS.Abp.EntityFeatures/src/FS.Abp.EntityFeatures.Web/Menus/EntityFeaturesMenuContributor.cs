using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.EntityFeatures.Web.Menus
{
    public class EntityFeaturesMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(EntityFeaturesMenus.Prefix, displayName: "EntityFeatures", "~/EntityFeatures", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}