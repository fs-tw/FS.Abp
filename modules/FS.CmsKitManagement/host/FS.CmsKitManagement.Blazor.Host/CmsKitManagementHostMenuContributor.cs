using System.Threading.Tasks;
using FS.CmsKitManagement.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.CmsKitManagement.Blazor.Host
{
    public class CmsKitManagementHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<CmsKitManagementResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "CmsKitManagement.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
