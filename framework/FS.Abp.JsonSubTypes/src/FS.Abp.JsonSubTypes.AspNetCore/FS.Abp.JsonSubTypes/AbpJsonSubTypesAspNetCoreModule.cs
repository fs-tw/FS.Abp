using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Linq;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using JsonSubTypes;
using Volo.Abp.Json.SystemTextJson;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace FS.Abp.JsonSubTypes
{
    [DependsOn(typeof(JsonSubTypesCoreModule))]
    [DependsOn(typeof(Volo.Abp.AspNetCore.AbpAspNetCoreModule))]
    public class AbpJsonSubTypesAspNetCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.TryAddEnumerable(ServiceDescriptor
                .Transient<IConfigureOptions<MvcNewtonsoftJsonOptions>, MvcNewtonsoftJsonOptionsSetup>());

            context.Services.TryAddEnumerable(ServiceDescriptor
                .Transient<IConfigureOptions<AbpSystemTextJsonSerializerOptions>, AbpSystemTextJsonSerializerOptionsSetup>());
        }
    }
}
