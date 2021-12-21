using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityFeatures
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule))]
    public class AbpEntityFeaturesAspNetCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.TryAddEnumerable(ServiceDescriptor
                .Transient<IConfigureOptions<JsonOptions>, JsonOptionsSetup>());


            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(AbpEntityFeaturesAspNetCoreModule).Assembly, c =>
                 {
                     c.RootPath = AbpEntityFeaturesConsts.RootPath;
                     c.RemoteServiceName = AbpEntityFeaturesConsts.RemoteServiceName;
                 });
            });
        }
    }
}
