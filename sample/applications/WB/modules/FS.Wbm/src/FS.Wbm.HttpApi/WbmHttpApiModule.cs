using Localization.Resources.AbpUi;
using FS.Wbm.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Wbm
{
    [DependsOn(
        typeof(WbmApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class WbmHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(WbmHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<WbmResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
