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
        public static async Task<T> TryGetAsync<T>([NotNull] this ISettingManager settingManager, [NotNull] string name, string providerName, string providerKey, T defaultValue = default)
            where T : struct
        {
            Check.NotNull(settingManager, nameof(settingManager));
            Check.NotNull(name, nameof(name));

            string value= await getAsync(settingManager, name, providerName, providerKey);

            if (string.IsNullOrEmpty(value)) return default;
            if (typeof(T).IsEnum) return (T)Enum.Parse(typeof(T), value);
            return value?.To<T>() ?? defaultValue;
        }

        public static async Task<string> TryGetAsync([NotNull] this ISettingManager settingManager, [NotNull] string name, string providerName, string providerKey)
        {
            Check.NotNull(settingManager, nameof(settingManager));
            Check.NotNull(name, nameof(name));

            return await getAsync(settingManager, name, providerName, providerKey);
        }

        private static async Task<string> getAsync(ISettingManager settingManager, string name, string providerName, string providerKey)
        {
            string value;

            if (string.IsNullOrEmpty(providerName))
            {
                value = await settingManager.GetOrNullDefaultAsync(name);
            }
            else
            {
                value = await settingManager.GetOrNullAsync(name, providerName, providerKey, false);
            }
            return value;
        }

        public static async Task TrySetAsync([NotNull] this ISettingManager settingManager,string name, string value, string providerName, string providerKey)
        {
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