using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Coding.Codes.Blazor.Menus;

public class CodesMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(CodesMenus.Prefix, displayName: "Codes", "/Codes", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
