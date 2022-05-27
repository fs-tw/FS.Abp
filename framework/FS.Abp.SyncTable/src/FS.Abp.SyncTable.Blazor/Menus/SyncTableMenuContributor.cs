using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.SyncTable.Blazor.Menus;

public class SyncTableMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(SyncTableMenus.Prefix, displayName: "SyncTable", "/SyncTable", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
