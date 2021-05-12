using Localization.Resources.AbpUi;
using FS.CmsKitManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(FS.Abp.AbpHttpApiModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitHttpApiModule))]
    public class CmsKitManagementHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(CmsKitManagementHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<CmsKitManagementResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
