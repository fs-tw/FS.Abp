using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.Coding
{
    public interface IHasCodesAttribute { }
    public class HasCodesAttribute<T>: IHasCodesAttribute
    {
        public static string No
        {
            get 
            {
                var codesAttr = Volo.Abp.Reflection.ReflectionHelper
                    .GetSingleAttributeOfMemberOrDeclaringTypeOrDefault<CodesAttribute>(typeof(T));
                return codesAttr?.No;
            }
        }
        public static string Name
        {
            get
            {
                var codesAttr = Volo.Abp.Reflection.ReflectionHelper
                    .GetSingleAttributeOfMemberOrDeclaringTypeOrDefault<CodesAttribute>(typeof(T));
                return codesAttr?.Name;
            }
        }
        public static string DisplayName
        {
            get
            {
                var codesAttr = Volo.Abp.Reflection.ReflectionHelper
                    .GetSingleAttributeOfMemberOrDeclaringTypeOrDefault<CodesAttribute>(typeof(T));
                return codesAttr?.DisplayName;
            }
        }
        public static string Description
        {
            get
            {
                var codesAttr = Volo.Abp.Reflection.ReflectionHelper
                    .GetSingleAttributeOfMemberOrDeclaringTypeOrDefault<CodesAttribute>(typeof(T));
                return codesAttr?.Description;
            }
        }
    }
    public class CodesAttribute : System.Attribute
    {
        public string No { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public string Name { get; set; }
    }
}
