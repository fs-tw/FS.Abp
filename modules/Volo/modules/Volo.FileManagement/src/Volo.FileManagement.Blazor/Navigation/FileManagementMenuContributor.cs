using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Features;
using Volo.Abp.UI.Navigation;
using Volo.FileManagement.Authorization;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement.Blazor.Navigation
{
    public class FileManagementMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name != StandardMenus.Main)
            {
                return;
            }

            var featureChecker = context.ServiceProvider.GetService<IFeatureChecker>();

            if (!(await featureChecker.IsEnabledAsync(FileManagementFeatures.Enable)))
            {
                return;
            }

            var isGranted = await context.IsGrantedAsync(FileManagementPermissions.DirectoryDescriptor.Default);

            if (!isGranted)
            {
                return;
            }

            var l = context.GetLocalizer<FileManagementResource>();

            var fileManagementMenuItem = new ApplicationMenuItem(FileManagementMenuNames.GroupName, l["Menu:FileManagement"], "/file-management",icon: "fa fa-folder-open");

            context.Menu.GetAdministration().AddItem(fileManagementMenuItem);
        }
    }
}
