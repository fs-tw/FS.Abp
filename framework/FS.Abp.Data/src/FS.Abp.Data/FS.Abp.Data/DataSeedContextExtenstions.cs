using System.Collections.Generic;
using Volo.Abp.Data;

namespace FS.Abp.Data
{
    public static class DataSeedContextExtenstions
    {
        public static DataSeedContext SetProperty<T>(this DataSeedContext context, Dictionary<string, T> data)
        {
            return context.WithProperty(typeof(T).Name, data);
        }
        public static Dictionary<string, T> GetProperty<T>(this DataSeedContext context)
        {
            if (!context.Properties.ContainsKey(typeof(T).Name))
                return new Dictionary<string, T>();
            return context.Properties[typeof(T).Name] as Dictionary<string, T>;
        }
    }

}
