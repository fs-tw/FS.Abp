using System.Threading.Tasks;
using FS.Wbm.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.Wbm.Blazor.Host
{
    public class WbmHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<WbmResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "Wbm.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
