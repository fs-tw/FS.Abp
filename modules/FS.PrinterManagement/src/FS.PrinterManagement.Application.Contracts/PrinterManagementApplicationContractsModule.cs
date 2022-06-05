using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementDomainSharedModule)
        )]
    [DependsOn(typeof(FS.Printer.Printing.PrintingApplicationContractsModule))]
    public class PrinterManagementApplicationContractsModule : AbpModule
    {

    }
}
