using System.Threading.Tasks;
using FS.Theme.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.Theme.Blazor.Host
{
    public class ThemeHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<ThemeResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "Theme.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
