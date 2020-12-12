using System.Threading.Tasks;
using FS.Abp.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Blazor.Host
{
    public class AbpHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<AbpResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "Abp.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
