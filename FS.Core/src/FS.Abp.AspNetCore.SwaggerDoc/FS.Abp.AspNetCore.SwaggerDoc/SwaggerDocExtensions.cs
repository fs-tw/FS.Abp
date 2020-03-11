using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;

namespace FS.Abp.AspNetCore.SwaggerDoc
{
    public static class Extensions
    {
        public static string FriendlyId(this Type type)
        {
            var typeName = type.Name;//Default Short Name //type.FullNameSansTypeArguments().Replace("+", ".");

            if (type.DeclaringType != null)
            {
                typeName = $"{type.DeclaringType.Name}.{type.Name}";
            }
            if (type.GetTypeInfo().IsGenericType)
            {
                var genericArgumentIds = type.GetGenericArguments()
                    .Select(t => t.FriendlyId())
                    .ToArray();

                return new StringBuilder(typeName)
                    .Replace(string.Format("`{0}", genericArgumentIds.Count()), string.Empty)
                    .Append(string.Format("[{0}]", string.Join(",", genericArgumentIds).TrimEnd(',')))
                    .ToString();
            }

            return typeName.Replace('.', '_');
        }

        private static string FullNameSansTypeArguments(this Type type)
        {
            if (string.IsNullOrEmpty(type.FullName)) return string.Empty;

            var fullName = type.FullName;
            var chopIndex = fullName.IndexOf("[[");
            return (chopIndex == -1) ? fullName : fullName.Substring(0, chopIndex);
        }
    }
}
