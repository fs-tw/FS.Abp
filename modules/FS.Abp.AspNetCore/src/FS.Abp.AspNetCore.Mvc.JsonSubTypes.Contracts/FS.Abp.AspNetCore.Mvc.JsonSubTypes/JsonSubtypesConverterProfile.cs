using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    public interface IJsonSubtypesConverterProfile
    {
        List<JsonSubtypesConverterOption> JsonSubtypesConverterOptions { get; set; }
    }
    public interface IBaseTypeExpression
    {
        ISubtypesExpression CreateJsonSubtypesConverter<TBaseType>(string discriminatorProperty);
        ISubtypesExpression CreateJsonSubtypesConverter<TBaseType, TFallbackSubtype>(string discriminatorProperty);
    }
    public interface ISubtypesExpression
    {
        ISubtypesExpression RegisterSubtype<TSubtype>(object value);
    }
    public class JsonSubtypesConverterOption: ISubtypesExpression
    {
        public JsonSubtypesConverterOption(Type baseType, Type fallbackSubtype, string discriminatorProperty)
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
    public class JsonSubtypesConverterProfile : IJsonSubtypesConverterProfile,IBaseTypeExpression
    {
        public List<JsonSubtypesConverterOption> JsonSubtypesConverterOptions { get; set; }
        public JsonSubtypesConverterProfile()
        {
            this.JsonSubtypesConverterOptions = new List<JsonSubtypesConverterOption>();
        }

        public ISubtypesExpression CreateJsonSubtypesConverter<TBaseType>(string discriminatorProperty)
        {
            return CreateJsonSubtypesConverter<TBaseType, TBaseType>(discriminatorProperty);
        }

        public ISubtypesExpression CreateJsonSubtypesConverter<TBaseType, TFallbackSubtype>(string discriminatorProperty)
        {
            var result = new JsonSubtypesConverterOption(typeof(TBaseType), typeof(TFallbackSubtype), discriminatorProperty);
            JsonSubtypesConverterOptions.Add(result);
            return result;
        }
    }
}
