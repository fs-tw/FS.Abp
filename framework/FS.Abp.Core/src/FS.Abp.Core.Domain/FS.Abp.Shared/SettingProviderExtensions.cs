using JetBrains.Annotations;
using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Settings;

namespace FS.Abp.Shared
{
    public static class SettingProviderExtensions
    {
        public static async Task<T> TryGetAsync<T>([NotNull] this ISettingProvider settingProvider, [NotNull] string name, T defaultValue = default)
            where T : struct
        {
            Check.NotNull(settingProvider, nameof(settingProvider));
            Check.NotNull(name, nameof(name));

            var value = await settingProvider.GetOrNullAsync(name);

            if (string.IsNullOrEmpty(value)) return default;
            if (typeof(T).IsEnum) return (T)Enum.Parse(typeof(T), value);
            return value?.To<T>() ?? defaultValue;
        }
    }
}