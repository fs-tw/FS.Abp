using Localization.Resources.AbpUi;
using FS.Theme.TheProject.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(TheProjectApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]

    [DependsOn(
        typeof(FS.Theme.ThemeHttpApiModule)
        )]
    public class TheProjectHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(TheProjectHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<TheProjectResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
