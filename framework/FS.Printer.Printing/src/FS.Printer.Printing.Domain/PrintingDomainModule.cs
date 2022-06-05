using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(PrintingDomainSharedModule)
)]
[DependsOn(typeof(FS.Printer.PrinterDomainModule))]
public class PrintingDomainModule : AbpModule
{

}
