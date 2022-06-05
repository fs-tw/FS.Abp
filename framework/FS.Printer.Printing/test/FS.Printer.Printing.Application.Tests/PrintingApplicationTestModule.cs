using Volo.Abp.Modularity;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(PrintingApplicationModule),
    typeof(PrintingDomainTestModule)
    )]
public class PrintingApplicationTestModule : AbpModule
{

}
