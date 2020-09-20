﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Settings;
using Volo.Abp.Threading;

namespace FS.Abp.Settings
{
    //todo: from SettingManagement
    public interface IFactory<T>
        where T : class, new()
    {
        //Task<T> CreateAsync();
        T Value { get; }
    }
    public abstract class Factory<T> : IFactory<T>
        where T : class, new()
    {
        protected readonly ISettingProvider _settingProvider;

        public Factory(
            ISettingProvider settingProvider
            )
        {
            _settingProvider = settingProvider;
        }
        public virtual T Value
        {
            get
            {
                var result = new T();
                AsyncHelper.RunSync(() => CreateAsync(result));
                return result;
            }
        }

        protected abstract Task CreateAsync(T options);
    }
}