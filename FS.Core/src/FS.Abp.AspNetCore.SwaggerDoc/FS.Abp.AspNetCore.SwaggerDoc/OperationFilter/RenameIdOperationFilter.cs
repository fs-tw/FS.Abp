
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FS.Abp.AspNetCore.SwaggerDoc.OperationFilter
{
    public class RenameIdOperationFilter : IOperationFilter
    {
        public void Apply(Operation operation, OperationFilterContext context)
        {
            operation.OperationId = operation.Tags?.FirstOrDefault() + operation.OperationId;
        }

    }
}
