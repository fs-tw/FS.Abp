using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Printer.Web.Menus;

public class PrinterMenuContributor : IMenuContributor
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
        context.Menu.AddItem(new ApplicationMenuItem(PrinterMenus.Prefix, displayName: "Printer", "~/Printer", icon: "fa fa-globe"));

        return Task.CompletedTask;
    }
}
