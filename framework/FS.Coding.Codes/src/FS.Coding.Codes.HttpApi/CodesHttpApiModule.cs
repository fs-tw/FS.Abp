using Localization.Resources.AbpUi;
using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(CodesApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class CodesHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(CodesHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            //options.Resources
            //    .Get<CodesResource>()
            //    .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
