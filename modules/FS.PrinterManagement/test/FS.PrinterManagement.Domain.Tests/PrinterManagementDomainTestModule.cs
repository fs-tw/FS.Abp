using FS.PrinterManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(PrinterManagementEntityFrameworkCoreTestModule)
        )]
    public class PrinterManagementDomainTestModule : AbpModule
    {
        
    }
}
