using FS.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(AuditLoggingEntityFrameworkCoreTestModule)
        )]
    public class AuditLoggingDomainTestModule : AbpModule
    {
        
    }
}
