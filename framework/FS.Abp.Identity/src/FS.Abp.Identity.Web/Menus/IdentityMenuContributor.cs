using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Identity.Web.Menus;

public class IdentityMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(IdentityMenus.Prefix, displayName: "Identity", "~/Identity", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
