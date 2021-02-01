using FS.Theme.TheProject.Localization;
using FS.Theme.TheProject.Settings;
using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.SettingManagement;

namespace FS.Theme.TheProject
{
    public class TheProjectThemeSettingsAppService : ApplicationService, ITheProjectThemeSettingsAppService
    {
        protected ISettingManager SettingManager { get; }

        public TheProjectThemeSettingsAppService(ISettingManager settingManager)
        {
            SettingManager = settingManager;
        }

        public async Task<TheProjectThemeSettingsDto> GetAsync()
        {
            Enum.TryParse(
                await SettingManager.GetOrNullForCurrentUserAsync(
                    TheProjectSettings.Skin
                ),
                out TheProjectSkin skin
            );

            return new TheProjectThemeSettingsDto
            {
                Skin = skin
            };
        }

        public async Task UpdateAsync(UpdateTheProjectThemeSettingsDto input)
        {
            await SettingManager.SetForCurrentTenantAsync(TheProjectSettings.Skin, input.Skin.ToString());
        }
    }
}
