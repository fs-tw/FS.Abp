using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementDomainModule),
        typeof(PrinterManagementApplicationContractsModule)
        )]
    [DependsOn(typeof(FS.Printer.Printing.PrintingApplicationModule))]
    public class PrinterManagementApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<PrinterManagementApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<PrinterManagementApplicationModule>(validate: false);
            });
        }
    }
}
