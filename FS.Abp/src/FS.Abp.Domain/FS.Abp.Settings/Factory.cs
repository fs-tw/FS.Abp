using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;
using Volo.Abp.Threading;

namespace FS.Abp.Settings
{
    public interface IFactory<T>
        where T : class, new()
    {
        T Value { get; }
        Task UpdateAsync(T input, string providerName, string providerKey);
    }
    public abstract class Factory<T> : IFactory<T>
        where T : class, new()
    {
        public ISettingManager SettingManager { get; set; }
        public ISettingProvider SettingProvider { get; set; }
        public virtual T Value
        {
            get
            {
                var result = new T();
                AsyncHelper.RunSync(() => CreateAsync(result));
                return result;
            }
        }

        public abstract Task CreateAsync(T options);
        protected virtual async Task SetAsync(string name,string value, string providerName, string providerKey)
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

        public abstract Task UpdateAsync(T input, string providerName, string providerKey);
    }
}