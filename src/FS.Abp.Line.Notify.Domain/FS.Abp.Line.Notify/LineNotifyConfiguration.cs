using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.DependencyInjection;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace FS.Abp.Line.Notify
{
    public class LineNotifyConfiguration : ITransientDependency, ILineNotifyConfiguration
    {
        protected ISettingProvider SettingProvider { get; }
        protected ISettingManager SettingManager { get; }
        public LineNotifyConfiguration(ISettingProvider settingProvider, ISettingManager settingManager)
        {
            SettingProvider = settingProvider;
            SettingManager = settingManager;
        }

        public Task<string> GetClientIdAsync()
        {
            return GetNotEmptySettingValueAsync(LineNotifySettingNames.ClientId);
        }

        public async Task<string> GetClientSecretAsync()
        {
            return (await GetNotEmptySettingValueAsync(LineNotifySettingNames.ClientSecret));
        }

        public Task<string> GetTokenAsync()
        {
            return GetNotEmptySettingValueAsync(LineNotifySettingNames.Token);
        }
        public Task SetTokenAsync(string token)
        {
            return SettingManager.SetGlobalAsync(LineNotifySettingNames.Token, token);
        }

        protected async Task<string> GetNotEmptySettingValueAsync(string name)
        {
            var value = await SettingProvider.GetOrNullAsync(name);

            if (value.IsNullOrEmpty())
            {
                throw new AbpException($"Setting value for '{name}' is null or empty!");
            }

            return value;
        }
    }
}