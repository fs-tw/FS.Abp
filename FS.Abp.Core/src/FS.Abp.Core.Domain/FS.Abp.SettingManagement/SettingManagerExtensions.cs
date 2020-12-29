using JetBrains.Annotations;
using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace FS.Abp.SettingManagement
{
    public static class SettingManagerExtensions
    {
        public static async Task<T> TryGetAsync<T>([NotNull] this ISettingManager settingManager, [NotNull] string name, string providerName, string providerKey, T defaultValue = default, bool fallback = true)
            where T : struct
        {
            Check.NotNull(settingManager, nameof(settingManager));
            Check.NotNull(name, nameof(name));

            string value = await getAsync(settingManager, name, providerName, providerKey, fallback);

            if (string.IsNullOrEmpty(value)) return default;
            if (typeof(T).IsEnum) return (T)Enum.Parse(typeof(T), value);
            return value?.To<T>() ?? defaultValue;
        }

        public static async Task<string> TryGetAsync([NotNull] this ISettingManager settingManager, [NotNull] string name, string providerName, string providerKey, bool fallback = true)
        {
            Check.NotNull(settingManager, nameof(settingManager));
            Check.NotNull(name, nameof(name));

            return await getAsync(settingManager, name, providerName, providerKey, fallback);
        }

        private static async Task<string> getAsync(ISettingManager settingManager, string name, string providerName, string providerKey,bool fallback = true)
        {
            string value;

            if (string.IsNullOrEmpty(providerName))
            {
                value = await settingManager.GetOrNullForCurrentTenantAsync(name, true);//await settingManager.GetOrNullGlobalAsync(name);
            }
            else
            {
                value = await settingManager.GetOrNullAsync(name, providerName, providerKey, fallback);
            }
            return value;
        }

        public static async Task TrySetAsync([NotNull] this ISettingManager settingManager, string name, string value, string providerName, string providerKey)
        {
            value = value ?? "";
            if (string.IsNullOrEmpty(providerName))
            {
                await settingManager.SetGlobalAsync(name, value);
            }
            else
            {
                await settingManager.SetAsync(name, value, providerName, providerKey);
            }
        }
    }
}
