using Localization.Resources.AbpUi;
using FS.Entity.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Entity.EntityFeatures;

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
