using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.LeptonTheme.Management.Blazor.Pages.LeptonThemeManagement.LeptonThemeSettingGroup;
using Volo.Abp.LeptonTheme.Management.Localization;
using Volo.Abp.LeptonTheme.Management.Permissions;
using Volo.Abp.SettingManagement.Blazor;

namespace Volo.Abp.LeptonTheme.Management.Blazor.Settings
{
    public class LeptonSettingManagementComponentContributor : ISettingComponentContributor
    {
        public async Task ConfigureAsync(SettingComponentCreationContext context)
        {
            if (!await CheckPermissionsInternalAsync(context))
            {
                return;
            }

            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<LeptonThemeManagementResource>>();
            context.Groups.Add(
                new SettingComponentGroup(
                    "Volo.Abp.LeptonThemeManagement",
                    l["Menu:LeptonThemeSettings"],
                    typeof(LeptonThemeSettingManagementComponent)
                )
            );
        }

        public async Task<bool> CheckPermissionsAsync(SettingComponentCreationContext context)
        {
            return await CheckPermissionsInternalAsync(context);
        }

        private async Task<bool> CheckPermissionsInternalAsync(SettingComponentCreationContext context)
        {
            var authService = context.ServiceProvider.GetRequiredService<IAuthorizationService>();

            return await authService.IsGrantedAsync(LeptonThemeManagementPermissions.Settings.SettingsGroup);
        }
    }
}