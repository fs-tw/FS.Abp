using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;

namespace FS.Entity.EntityFeatures
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(FS.Entity.EntityFeatures.EntityFeaturesCoreModule))]
    public class EntityFeaturesAspNetCoreModule : AbpModule
    {

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.TryAddEnumerable(ServiceDescriptor
                .Transient<IConfigureOptions<JsonOptions>, JsonOptionsSetup>());
        }
    }
}


