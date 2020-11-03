using System.Threading.Tasks;
using FS.YC.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.YC.Blazor
{
    public class YCMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<YCResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "YC.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
