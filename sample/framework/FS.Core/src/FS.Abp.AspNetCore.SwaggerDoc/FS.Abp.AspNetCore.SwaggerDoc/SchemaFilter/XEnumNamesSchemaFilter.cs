using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace FS.Abp.AspNetCore.SwaggerDoc.SchemaFilter
{
    public class XEnumNamesSchemaFilter : ISchemaFilter
    {
        public void Apply(Schema model, SchemaFilterContext context)
        {
            var typeInfo = context.SystemType.GetTypeInfo();
            if (typeInfo.IsEnum)
            {
                var names = Enum.GetNames(context.SystemType);
                model.Extensions.Add("x-enumNames", names);
            }
        }
    }
}
