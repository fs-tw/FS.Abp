using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.LeptonTheme.Management.Localization;
using Volo.Abp.LeptonTheme.Management.Pages.LeptonThemeManagement.Components.LeptonThemeSettingGroup;
using Volo.Abp.LeptonTheme.Management.Permissions;
using Volo.Abp.SettingManagement.Web.Pages.SettingManagement;

namespace Volo.Abp.LeptonTheme.Management.Settings
{
    public class LeptonThemeSettingManagementPageContributor : ISettingPageContributor
    {
        public async Task ConfigureAsync(SettingPageCreationContext context)
        {
            if (!await CheckPermissionsInternalAsync(context))
            {
                return;
            }

            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<LeptonThemeManagementResource>>();
            context.Groups.Add(
                new SettingPageGroup(
                    "Volo.Abp.LeptonThemeManagement",
                    l["Menu:LeptonThemeSettings"],
                    typeof(LeptonThemeSettingGroupViewComponent)
                )
            );
        }

        public async Task<bool> CheckPermissionsAsync(SettingPageCreationContext context)
        {
            return await CheckPermissionsInternalAsync(context);
        }

        private async Task<bool> CheckPermissionsInternalAsync(SettingPageCreationContext context)
        {
            var authService = context.ServiceProvider.GetRequiredService<IAuthorizationService>();

            return await authService.IsGrantedAsync(LeptonThemeManagementPermissions.Settings.SettingsGroup);
        }
    }
}
