using System.Threading.Tasks;
using FS.Abp.Authentication.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Authentication.Blazor.Host
{
    public class AuthenticationHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<AbpAuthenticationResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "Authentication.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
