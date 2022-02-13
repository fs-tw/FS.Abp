using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Entity.MultiLinguals.Blazor.Menus;

public class MultiLingualsMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(MultiLingualsMenus.Prefix, displayName: "MultiLinguals", "/MultiLinguals", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
