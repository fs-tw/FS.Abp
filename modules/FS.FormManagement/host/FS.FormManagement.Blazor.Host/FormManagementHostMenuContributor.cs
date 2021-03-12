using System.Threading.Tasks;
using FS.FormManagement.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.FormManagement.Blazor.Host
{
    public class FormManagementHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<FormManagementResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "FormManagement.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
