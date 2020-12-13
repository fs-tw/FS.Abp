using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement.Blazor.Host
{
    public class FileManagementHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<FileManagementResource>();

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
