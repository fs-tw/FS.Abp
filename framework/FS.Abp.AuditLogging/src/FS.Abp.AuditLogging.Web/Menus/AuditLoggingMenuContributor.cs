using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.AuditLogging.Web.Menus
{
    public class AuditLoggingMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(AuditLoggingMenus.Prefix, displayName: "AuditLogging", "~/AuditLogging", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}