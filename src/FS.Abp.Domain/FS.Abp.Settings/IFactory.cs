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
        Task<T> GetAsync(string providerName, string providerKey);
        Task SetAsync(T input, string providerName, string providerKey);
    }
}