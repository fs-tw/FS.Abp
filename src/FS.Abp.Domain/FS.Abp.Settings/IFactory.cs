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
        public ISettingManager SettingManager { get; }
        public ISettingProvider SettingProvider { get; }
        Task<T> GetAsync(string providerName = null, string providerKey = null, bool fallback = true);
        Task SetAsync(T input, string providerName = null, string providerKey = null);
    }
}