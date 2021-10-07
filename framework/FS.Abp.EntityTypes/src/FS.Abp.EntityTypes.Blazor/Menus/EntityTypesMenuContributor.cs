using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.EntityTypes.Blazor.Menus
{
    public class EntityTypesMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(EntityTypesMenus.Prefix, displayName: "EntityTypes", "/EntityTypes", icon: "fa fa-globe"));
            
            return Task.CompletedTask;
        }
    }
}