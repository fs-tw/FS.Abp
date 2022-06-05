using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Printer;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(PrinterDomainSharedModule)
)]
[DependsOn(typeof(FS.Abp.Data.AbpDataModule))]
public class PrinterDomainModule : AbpModule
{

}
