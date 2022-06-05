using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementDomainSharedModule)
    )]
    [DependsOn(typeof(FS.Printer.Printing.PrintingDomainModule))]
    public class PrinterManagementDomainModule : AbpModule
    {

    }
}
