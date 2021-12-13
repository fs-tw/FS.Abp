using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace FS.Abp.Metadata
{
    public class SwaggerIgnoreFilter : ISchemaFilter
    {
        public void Apply(OpenApiSchema schema, SchemaFilterContext schemaFilterContext)
        {
            if (schema.Properties.Count == 0)
                return;

            var propertyList = schemaFilterContext.Type.GetProperties();

            var propertiesDescriptor = TypeDescriptor.GetProperties(schemaFilterContext.Type);

            var excludedList = propertyList.ToList().Where(x =>
              {
                  var prop = propertiesDescriptor.Find(x.Name, false);
                  return prop?.Attributes.OfType<System.Text.Json.Serialization.JsonIgnoreAttribute>().Count() > 0;
              }).Select(x=>x.Name.ToCamelCase());


            foreach (var excludedName in excludedList)
            {
                if (schema.Properties.ContainsKey(excludedName))
                    schema.Properties.Remove(excludedName);
            }
        }
    }
}
