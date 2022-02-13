using Localization.Resources.AbpUi;
using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Entity.MultiLinguals;

[DependsOn(
    typeof(MultiLingualsApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class MultiLingualsHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(MultiLingualsHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<MultiLingualsResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
