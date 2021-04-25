using System;
using System.Collections.Generic;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    public interface ISubtypesExpression
    {
        ISubtypesExpression RegisterSubtype<TSubtype>(object value);
    }
    public class JsonSubtypesConverterDefinition: ISubtypesExpression
    {
        public JsonSubtypesConverterDefinition(Type baseType, Type fallbackSubtype, string discriminatorProperty)
        {
            this.Subtypes = new List<(Type Subtype, object value)>();
            this.BaseType = baseType;
            this.FallbackSubtype = fallbackSubtype;
            this.DiscriminatorProperty = discriminatorProperty;
        }
        public Type BaseType { get; set; }
        public Type FallbackSubtype { get; set; }
        public string DiscriminatorProperty { get; set; }
        public List<(Type Subtype, object value)> Subtypes { get; set; }

        public ISubtypesExpression RegisterSubtype<TSubtype>(object value)
        {
            this.Subtypes.Add((Subtype: typeof(TSubtype), value: value));
            return this;
        }
    }
}
