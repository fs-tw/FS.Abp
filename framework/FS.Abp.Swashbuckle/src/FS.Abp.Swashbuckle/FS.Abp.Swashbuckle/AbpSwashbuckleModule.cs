using FS.Abp.Swashbuckle;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;
using Volo.Abp.Modularity;

namespace FS.Abp.Swashbuckle
{
    [DependsOn(
        typeof(Volo.Abp.Swashbuckle.AbpSwashbuckleModule)
        )]
    public class AbpSwashbuckleModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddTransient<IConfigureOptions<SwaggerGenOptions>, SwaggerDocConfigureOptions>();

            context.Services.AddTransient<IConfigureOptions<SwaggerUIOptions>, SwaggerEndpointConfigureOptions>();
        }
    }
}
