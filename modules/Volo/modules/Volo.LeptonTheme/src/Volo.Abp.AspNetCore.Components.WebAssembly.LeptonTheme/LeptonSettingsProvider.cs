using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Settings;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme
{
    public class LeptonSettingsProvider : ILeptonSettingsProvider, ITransientDependency
    {
        private readonly ISettingProvider _settingProvider;

        public LeptonSettingsProvider(ISettingProvider settingProvider)
        {
            _settingProvider = settingProvider;
        }

        public async Task<bool> IsBoxedAsync()
        {
            return await _settingProvider.GetAsync<bool>(LeptonThemeSettingNames.Layout.Boxed);
        }

        public async Task<MenuPlacement> GetMenuPlacementAsync()
        {
            return Enum.Parse<MenuPlacement>(await _settingProvider.GetOrNullAsync(LeptonThemeSettingNames.Layout.MenuPlacement));
        }

        public async Task<MenuStatus> GetMenuStatusAsync()
        {
            return Enum.Parse<MenuStatus>(await _settingProvider.GetOrNullAsync(LeptonThemeSettingNames.Layout.MenuStatus));
        }

        public async Task<LeptonStyle> GetStyleAsync()
        {
            return Enum.Parse<LeptonStyle>(await _settingProvider.GetOrNullAsync(LeptonThemeSettingNames.Style));
        }
    }
}
