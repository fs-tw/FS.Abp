using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FS.Abp.AspNetCore.Mvc.JsonSubTypes
{
    public interface IJsonSubtypesConverterProfile : Volo.Abp.DependencyInjection.ISingletonDependency
    {
        List<JsonSubtypesConverterDefinition> JsonSubtypesConverterDefinitions { get; set; }
    }

    public abstract class JsonSubtypesConverterProfile : IJsonSubtypesConverterProfile
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
            var result = JsonSubtypesConverterDefinitions.SingleOrDefault(x => x.BaseType == typeof(TBaseType));
            if (result == null)
                result = new JsonSubtypesConverterDefinition(typeof(TBaseType), typeof(TFallbackSubtype), discriminatorProperty);

            JsonSubtypesConverterDefinitions.Add(result);
            return result;
        }
    }
}
