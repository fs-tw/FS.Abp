using FS.Abp.Settings;
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
        public static async Task<U> TryGetAsync<T,U>([NotNull] this IFactory<T> settingFactory, [NotNull] string name, string providerName, string providerKey, U defaultValue = default, bool fallback = true)
            where T : class, new()
            where U : struct
        {
            Check.NotNull(settingFactory, nameof(settingFactory));
            Check.NotNull(name, nameof(name));

            string value = await getAsync(settingFactory, name, providerName, providerKey);

            if (string.IsNullOrEmpty(value)) return default;
            if (typeof(U).IsEnum) return (U)Enum.Parse(typeof(U), value);
            return value?.To<U>() ?? defaultValue;
        }

        public static async Task<string> TryGetAsync<T>([NotNull] this IFactory<T> settingFactory, [NotNull] string name, string providerName, string providerKey, bool fallback = true)
            where T : class, new()
        {
            Check.NotNull(settingFactory, nameof(settingFactory));
            Check.NotNull(name, nameof(name));

            return await getAsync(settingFactory, name, providerName, providerKey);
        }

        private static async Task<string> getAsync<T>(this IFactory<T> settingFactory, string name, string providerName, string providerKey, bool fallback = true)
            where T : class, new()
        {
            string value;

            if (string.IsNullOrEmpty(providerName))
            {
                value = await settingFactory.SettingProvider.GetOrNullAsync(name);
            }
            else
            {
                value = await settingFactory.SettingManager.GetOrNullAsync(name, providerName, providerKey, fallback);
            }
            return value;
        }


        public static async Task TrySetAsync<T>([NotNull] this IFactory<T> settingFactory, string name, string value, string providerName, string providerKey, bool fallback = true)
            where T : class, new()
        {
            if (string.IsNullOrEmpty(providerName))
            {
                await settingFactory.SettingManager.SetGlobalAsync(name, value);
            }
            else
            {
                await settingFactory.SettingManager.SetAsync(name, value, providerName, providerKey);
            }
        }
    }
}