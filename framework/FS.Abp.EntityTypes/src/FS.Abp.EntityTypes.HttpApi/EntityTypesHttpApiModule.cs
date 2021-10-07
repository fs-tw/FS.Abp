using Localization.Resources.AbpUi;
using FS.Abp.EntityTypes.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(EntityTypesApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class EntityTypesHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(EntityTypesHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<EntityTypesResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
