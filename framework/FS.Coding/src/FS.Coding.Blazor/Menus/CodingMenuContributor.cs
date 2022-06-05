using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Coding.Blazor.Menus;

public class CodingMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(CodingMenus.Prefix, displayName: "Coding", "/Coding", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
