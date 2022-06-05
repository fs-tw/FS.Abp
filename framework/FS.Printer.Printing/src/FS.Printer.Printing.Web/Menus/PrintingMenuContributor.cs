using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Printer.Printing.Web.Menus;

public class PrintingMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(PrintingMenus.Prefix, displayName: "Printing", "~/Printing", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
