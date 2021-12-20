using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp;

namespace FS.Abp.Data
{
    public static class StringExtensions
    {
        public static T ConvertTo<T>(this string value, T defaultValue = default)
            where T: struct
        {
            if (string.IsNullOrEmpty(value)) 
                return default;

            if (typeof(T).IsEnum) 
                return (T)Enum.Parse(typeof(T), value);

            return value?.To<T>() ?? defaultValue;
        }

    }
}
