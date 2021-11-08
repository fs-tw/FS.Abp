using JetBrains.Annotations;
using System;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace FS.Abp.SettingManagement
{
    public abstract class Factory<T> : Volo.Abp.Domain.Services.DomainService, IFactory<T>
        where T : class, new()
    {
        public ISettingManager SettingManager => this.LazyServiceProvider.LazyGetRequiredService<ISettingManager>();

        public ISettingProvider SettingProvider => this.LazyServiceProvider.LazyGetRequiredService<ISettingProvider>();

        public abstract Task<T> GetAsync(string providerName = null, string providerKey = null, bool fallback = true);

        public abstract Task SetAsync(T input, string providerName = null, string providerKey = null, bool forceToSet = false);

        protected async Task<U> TryGetAsync<U>([NotNull] string name, string providerName, string providerKey, U defaultValue = default, bool fallback = true)
            where U : struct
        {
            Check.NotNull(name, nameof(name));

            string value = await getAsync(name, providerName, providerKey, fallback);

            if (string.IsNullOrEmpty(value)) return default;
            if (typeof(U).IsEnum) return (U)Enum.Parse(typeof(U), value);
            return value?.To<U>() ?? defaultValue;
        }

        protected async Task<string> TryGetAsync([NotNull] string name, string providerName, string providerKey, bool fallback = true)
        {
            Check.NotNull(name, nameof(name));

            return await getAsync(name, providerName, providerKey, fallback);
        }


        protected async Task TrySetAsync(string name, string value, string providerName, string providerKey, bool forceToSet = false)
        {
            if (string.IsNullOrEmpty(providerName))
            {
                await SettingManager.SetGlobalAsync(name, value);
            }
            else
            {
                await SettingManager.SetAsync(name, value, providerName, providerKey);
            }
        }
        private async Task<string> getAsync(string name, string providerName, string providerKey, bool fallback = true)
        {
            string value;

            if (string.IsNullOrEmpty(providerName))
            {
                value = await SettingProvider.GetOrNullAsync(name);
            }
            else
            {
                value = await SettingManager.GetOrNullAsync(name, providerName, providerKey, fallback);
            }
            return value;
        }
    }
}