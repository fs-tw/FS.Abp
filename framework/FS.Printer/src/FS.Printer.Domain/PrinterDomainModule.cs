using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Printer;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(PrinterDomainSharedModule)
)]
public class PrinterDomainModule : AbpModule
{

}
