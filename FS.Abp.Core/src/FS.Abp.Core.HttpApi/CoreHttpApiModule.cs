using Localization.Resources.AbpUi;
using FS.Abp.Core.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class CoreHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(CoreHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AbpCoreResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
