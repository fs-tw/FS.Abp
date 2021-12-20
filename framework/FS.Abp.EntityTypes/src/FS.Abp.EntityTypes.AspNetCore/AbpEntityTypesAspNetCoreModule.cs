using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule))]
    public class AbpEntityTypesAspNetCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.TryAddEnumerable(ServiceDescriptor
                .Transient<IConfigureOptions<JsonOptions>, JsonOptionsSetup>());


            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(AbpEntityTypesAspNetCoreModule).Assembly,c=> 
                {
                    c.RootPath = "entity-types";
                    c.RemoteServiceName = "entity-types";
                });
            });
        }
    }
}
