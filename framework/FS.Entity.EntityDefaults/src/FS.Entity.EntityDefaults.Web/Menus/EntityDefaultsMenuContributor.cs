using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Entity.EntityDefaults.Web.Menus;

public class EntityDefaultsMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(EntityDefaultsMenus.Prefix, displayName: "EntityDefaults", "~/EntityDefaults", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
