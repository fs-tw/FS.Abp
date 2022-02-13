using Localization.Resources.AbpUi;
using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Entity.EntityDefaults;

[DependsOn(
    typeof(EntityDefaultsApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class EntityDefaultsHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(EntityDefaultsHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<EntityDefaultsResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
