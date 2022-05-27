using Localization.Resources.AbpUi;
using FS.Abp.SyncTable.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.SyncTable;

[DependsOn(
    typeof(SyncTableApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class SyncTableHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<IMvcBuilder>(mvcBuilder =>
        {
            mvcBuilder.AddApplicationPartIfNotExists(typeof(SyncTableHttpApiModule).Assembly);
        });
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<SyncTableResource>()
                .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
