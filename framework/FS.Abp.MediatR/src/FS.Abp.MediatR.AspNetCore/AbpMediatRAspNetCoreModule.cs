using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.Conventions;
using Volo.Abp.Modularity;

namespace FS.Abp.MediatR.AspNetCore
{
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRModule))]
    [DependsOn(typeof(Volo.Abp.Swashbuckle.AbpSwashbuckleModule))]
    public class AbpMediatRAspNetCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddTransient<IConfigureOptions<AbpAspNetCoreMvcOptions>, AbpAspNetCoreMvcConfigureOptions>();

            context.Services.AddAbpMediatR<AbpMediatRAspNetCoreModule>();
        }
    }

    public class AbpAspNetCoreMvcConfigureOptions : IConfigureOptions<AbpAspNetCoreMvcOptions>
    {
        private readonly AbpMediatROptions _abpMediatROptions;
        public AbpAspNetCoreMvcConfigureOptions(
            IOptions<AbpMediatROptions> abpMediatROptions)
        {
            _abpMediatROptions = abpMediatROptions.Value;
        }
        public void Configure(AbpAspNetCoreMvcOptions options)
        {
            options.ConventionalControllers.Create(_abpMediatROptions);
        }


    }
}
