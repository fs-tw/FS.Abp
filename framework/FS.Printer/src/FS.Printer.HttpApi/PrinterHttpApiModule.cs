using Localization.Resources.AbpUi;
using FS.Printer.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Printer;

[DependsOn(
    typeof(PrinterApplicationContractsModule),
    typeof(AbpAspNetCoreMvcModule))]
public class PrinterHttpApiModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        //PreConfigure<IMvcBuilder>(mvcBuilder =>
        //{
        //    mvcBuilder.AddApplicationPartIfNotExists(typeof(PrinterHttpApiModule).Assembly);
        //});
    }

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        //Configure<AbpLocalizationOptions>(options =>
        //{
        //    options.Resources
        //        .Get<PrinterResource>()
        //        .AddBaseTypes(typeof(AbpUiResource));
        //});
    }
}
