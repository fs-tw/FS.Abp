using System;
using System.Collections.Generic;
using System.Globalization;
using Volo.Abp;
using Volo.Abp.Data;
using Volo.Abp.Reflection;

namespace Volo.Abp.Data
{
    public static class HasExtraPropertiesExtensions
    {
        //TODO:Newtonsoft remove , use IJsonSerializer
        public static TProperty GetExtraProperty<TProperty>(this IHasExtraProperties source, string name)
            where TProperty : class
        {
            var jsonObject = source.ExtraProperties.GetOrDefault(name);
            return jsonObject is TProperty ?
                jsonObject as TProperty :
                Newtonsoft.Json.JsonConvert.DeserializeObject<TProperty>(jsonObject.ToString());
        }

        public static void SetExtraProperty<TProperty>(this IHasExtraProperties source, string name, TProperty value)
        {
            if (value == null)
            {
                source.ExtraProperties.Remove(name);
            }
            else
            {
                source.ExtraProperties[name] = value;
            }
        }
    }
}