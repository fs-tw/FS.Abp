using Microsoft.AspNetCore.Mvc.ApiExplorer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.Swagger;
using FS.Abp.AspNetCore.SwaggerDoc.OperationFilter;
using FS.Abp.AspNetCore.SwaggerDoc.SchemaFilter;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.AspNetCore.SwaggerDoc
{
    [DependsOn(typeof(AbpVirtualFileSystemModule))]
    public class AbpSwaggerDocModule: AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<VirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpSwaggerDocModule>();
            });

            context.Services.AddSwaggerGen(
                options =>
                {
                    var serviceProvider = context.Services.BuildServiceProvider();
                    var myOptions = serviceProvider.GetService<IOptions<SwaggerDocOptions>>().Value;
                    options.SwaggerDoc("Abp", new Info { Title = "Abp", Version = "Abp" });
                    myOptions.FindDocNames().ForEach(docName =>
                    {
                        options.SwaggerDoc(docName, new Info { Title = docName, Version = docName });
                    });

                    options.DocInclusionPredicate((docName, description) =>
                    {
                        var targetDocName = myOptions.GetDocName(description.GroupName);
                        if (!myOptions.IsExistDocName(targetDocName) && docName == "Abp")
                            return true;
                        return targetDocName == docName;
                    });
                    options.CustomSchemaIds(type => type.FriendlyId());

                    // Define the BearerAuth scheme that's in use
                    options.AddSecurityDefinition("bearerAuth", new ApiKeyScheme()
                    {
                        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
                        Name = "Authorization",
                        In = "header",
                        Type = "apiKey"
                    });
                    options.OperationFilter<RenameIdOperationFilter>();
                    //options.DescribeAllEnumsAsStrings();
                    options.SchemaFilter<XEnumNamesSchemaFilter>();
                });
        }
    }
}
