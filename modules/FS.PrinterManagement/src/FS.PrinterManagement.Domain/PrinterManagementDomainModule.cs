using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(PrinterManagementDomainSharedModule)
    )]
    [DependsOn(typeof(FS.Abp.Data.AbpDataModule))]
    public class PrinterManagementDomainModule : AbpModule
    {

    }
}
