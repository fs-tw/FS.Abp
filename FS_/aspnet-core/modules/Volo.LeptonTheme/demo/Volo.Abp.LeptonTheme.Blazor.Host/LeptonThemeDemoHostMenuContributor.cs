using System.Threading.Tasks;
using Volo.Abp.LeptonTheme.Management.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.LeptonTheme.Blazor.Host
{
    public class LeptonThemeDemoHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<LeptonThemeManagementResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "MyProjectName.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
