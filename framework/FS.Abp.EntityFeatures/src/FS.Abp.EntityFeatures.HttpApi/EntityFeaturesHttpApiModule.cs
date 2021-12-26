using Localization.Resources.AbpUi;
using FS.Abp.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.EntityFeatures
{
    [DependsOn(
        typeof(EntityFeaturesApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class EntityFeaturesHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(EntityFeaturesHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<EntityFeaturesResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
