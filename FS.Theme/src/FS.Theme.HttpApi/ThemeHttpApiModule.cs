using Localization.Resources.AbpUi;
using FS.Theme.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Theme
{
    [DependsOn(
        typeof(ThemeApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class ThemeHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(ThemeHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<ThemeResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
