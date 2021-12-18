using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Volo.Abp;
using Volo.Abp.Data;
using Volo.Abp.Reflection;

namespace Volo.Abp.Data
{
    public static class IHasExtraPropertiesExtensions
    {
        public static TProperty GetExtraProperty<TProperty>(this IHasExtraProperties source, string name)
            where TProperty : class
        {
            var jElement = source.ExtraProperties.GetOrDefault(name);

            if (jElement == null)
                return defaultResult();

            if (jElement is TProperty)
                return jElement as TProperty;

            try
            {
                return System.Text.Json.JsonSerializer.Deserialize<TProperty>(jElement.ToString());
            }
            catch (Exception)
            {
                return defaultResult();
            }

            TProperty defaultResult()
            {
                string defaultText;

                defaultText = System.Text.Json.JsonSerializer.Serialize(default(TProperty));

                return System.Text.Json.JsonSerializer.Deserialize<TProperty>(defaultText);
            }
        }
    }
}