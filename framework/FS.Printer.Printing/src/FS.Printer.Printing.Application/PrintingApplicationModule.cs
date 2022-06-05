using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(PrintingDomainModule),
    typeof(PrintingApplicationContractsModule)
    )]
[DependsOn(typeof(FS.Printer.PrinterApplicationModule))]
public class PrintingApplicationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<PrintingApplicationModule>();
        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddMaps<PrintingApplicationModule>(validate: false);
        });
    }
}
