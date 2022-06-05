using Localization.Resources.AbpUi;
using FS.PrinterManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class PrinterManagementHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(PrinterManagementHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<PrinterManagementResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
