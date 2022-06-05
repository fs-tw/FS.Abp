using Localization.Resources.AbpUi;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(PrintingApplicationContractsModule))]
[DependsOn(typeof(FS.Printer.PrinterHttpApiModule))]
public class PrintingHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        //PreConfigure<IMvcBuilder>(mvcBuilder =>
        //{
        //    mvcBuilder.AddApplicationPartIfNotExists(typeof(PrintingHttpApiModule).Assembly);
        //});
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpLocalizationOptions>(options =>
        {
            //options.Resources
            //    .Get<PrintingResource>()
            //    .AddBaseTypes(typeof(AbpUiResource));
        });
    }
}
