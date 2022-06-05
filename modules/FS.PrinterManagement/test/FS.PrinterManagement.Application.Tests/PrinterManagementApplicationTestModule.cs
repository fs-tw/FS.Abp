using Volo.Abp.Modularity;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementApplicationModule),
        typeof(PrinterManagementDomainTestModule)
        )]
    public class PrinterManagementApplicationTestModule : AbpModule
    {

    }
}
