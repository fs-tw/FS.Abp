using System.Threading.Tasks;
using FS.LineNotify.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.LineNotify.Blazor.Host
{
    public class LineNotifyHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<LineNotifyResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "LineNotify.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
