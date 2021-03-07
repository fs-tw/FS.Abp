using Localization.Resources.AbpUi;
using FS.Cms.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule)//,
        //typeof(FS.Abp.CodingManagement.CodingManagementHttpApiModule),
        //typeof(FS.Abp.Core.CoreHttpApiModule)
        )]
    public class CmsHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(CmsHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<CmsResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}