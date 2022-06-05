using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(PrintingDomainSharedModule)
    )]
[DependsOn(typeof(Volo.Abp.FluentValidation.AbpFluentValidationModule))]
[DependsOn(typeof(FS.Printer.PrinterApplicationContractsModule))]
public class PrintingApplicationContractsModule : AbpModule
{

}
