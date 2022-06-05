using Volo.Abp.Modularity;

namespace FS.Printer;

[DependsOn(
    typeof(PrinterApplicationModule),
    typeof(PrinterDomainTestModule)
    )]
public class PrinterApplicationTestModule : AbpModule
{

}
