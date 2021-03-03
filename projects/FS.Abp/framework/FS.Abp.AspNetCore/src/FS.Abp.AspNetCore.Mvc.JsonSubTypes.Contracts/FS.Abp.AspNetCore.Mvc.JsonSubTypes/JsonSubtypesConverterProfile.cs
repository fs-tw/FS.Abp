using System.Collections.Generic;
using System.Text;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    public interface IJsonSubtypesConverterProfile
    {
        List<JsonSubtypesConverterDefinition> JsonSubtypesConverterDefinitions { get; set; }
    }
    public interface IBaseTypeExpression
    {
        ISubtypesExpression CreateJsonSubtypesConverter<TBaseType>(string discriminatorProperty);
        ISubtypesExpression CreateJsonSubtypesConverter<TBaseType, TFallbackSubtype>(string discriminatorProperty);
    }
    public class JsonSubtypesConverterProfile : IJsonSubtypesConverterProfile,IBaseTypeExpression
    {
        public List<JsonSubtypesConverterDefinition> JsonSubtypesConverterDefinitions { get; set; }
        public JsonSubtypesConverterProfile()
        {
            this.JsonSubtypesConverterDefinitions = new List<JsonSubtypesConverterDefinition>();
        }

        public ISubtypesExpression CreateJsonSubtypesConverter<TBaseType>(string discriminatorProperty)
        {
            return CreateJsonSubtypesConverter<TBaseType, TBaseType>(discriminatorProperty);
        }

        public ISubtypesExpression CreateJsonSubtypesConverter<TBaseType, TFallbackSubtype>(string discriminatorProperty)
        {
            var result = new JsonSubtypesConverterDefinition(typeof(TBaseType), typeof(TFallbackSubtype), discriminatorProperty);
            JsonSubtypesConverterDefinitions.Add(result);
            return result;
        }
    }
}
