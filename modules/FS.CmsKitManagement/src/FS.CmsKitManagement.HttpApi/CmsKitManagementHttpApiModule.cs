using Localization.Resources.AbpUi;
using FS.CmsKitManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
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
