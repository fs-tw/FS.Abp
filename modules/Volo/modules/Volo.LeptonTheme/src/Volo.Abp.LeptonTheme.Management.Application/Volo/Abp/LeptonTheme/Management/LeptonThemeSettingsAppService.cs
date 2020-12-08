using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Services;
using Volo.Abp.LeptonTheme.Management.Permissions;
using Volo.Abp.SettingManagement;

namespace Volo.Abp.LeptonTheme.Management
{
    [Authorize(LeptonThemeManagementPermissions.Settings.SettingsGroup)]
    public class LeptonThemeSettingsAppService : ApplicationService, ILeptonThemeSettingsAppService
    {
        protected ISettingManager SettingManager { get; }

        public LeptonThemeSettingsAppService(ISettingManager settingManager)
        {
            SettingManager = settingManager;
        }

        public async Task<LeptonThemeSettingsDto> GetAsync()
        {
            Enum.TryParse(
                await SettingManager.GetOrNullForCurrentUserAsync(
                    LeptonThemeSettingNames.Layout.MenuPlacement
                ),
                out MenuPlacement menuPlacement
            );

            Enum.TryParse(
                await SettingManager.GetOrNullForCurrentUserAsync(
                    LeptonThemeSettingNames.Layout.MenuStatus
                ),
                out MenuStatus menuStatus
            );

            Enum.TryParse(
                await SettingManager.GetOrNullForCurrentUserAsync(
                    LeptonThemeSettingNames.Style
                ),
                out LeptonStyle style
            );

            return new LeptonThemeSettingsDto
            {
                BoxedLayout = Convert.ToBoolean(await SettingManager.GetOrNullForCurrentUserAsync(LeptonThemeSettingNames.Layout.Boxed)),
                MenuPlacement = menuPlacement,
                MenuStatus = menuStatus,
                Style = style
            };
        }

        public async Task UpdateAsync(UpdateLeptonThemeSettingsDto input)
        {
            await SettingManager.SetForCurrentTenantAsync(LeptonThemeSettingNames.Layout.Boxed, input.BoxedLayout.ToString());
            await SettingManager.SetForCurrentTenantAsync(LeptonThemeSettingNames.Layout.MenuPlacement, input.MenuPlacement.ToString());
            await SettingManager.SetForCurrentTenantAsync(LeptonThemeSettingNames.Layout.MenuStatus, input.MenuStatus.ToString());
            await SettingManager.SetForCurrentTenantAsync(LeptonThemeSettingNames.Style, input.Style.ToString());
        }
    }
}
