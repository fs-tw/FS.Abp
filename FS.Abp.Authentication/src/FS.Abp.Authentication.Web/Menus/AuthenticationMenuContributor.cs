using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Authentication.Web.Menus
{
    public class AuthenticationMenuContributor : IMenuContributor
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
            context.Menu.AddItem(new ApplicationMenuItem(AuthenticationMenus.Prefix, displayName: "Authentication", "~/Authentication", icon: "fa fa-globe"));

            return Task.CompletedTask;
        }
    }
}