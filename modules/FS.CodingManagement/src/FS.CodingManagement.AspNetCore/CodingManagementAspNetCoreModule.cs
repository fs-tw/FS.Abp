using Localization.Resources.AbpUi;
using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementApplicationContractsModule))]
    [DependsOn(typeof(FS.Coding.Codes.CodesAspNetCoreModule))]
    public class CodingManagementAspNetCoreModule : AbpModule
    {
        //public override void PreConfigureServices(ServiceConfigurationContext context)
        //{
        //    PreConfigure<IMvcBuilder>(mvcBuilder =>
        //    {
        //        mvcBuilder.AddApplicationPartIfNotExists(typeof(CodingManagementHttpApiModule).Assembly);
        //    });
        //}

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                //options.Resources
                //    .Get<CodingManagementResource>()
                //    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
