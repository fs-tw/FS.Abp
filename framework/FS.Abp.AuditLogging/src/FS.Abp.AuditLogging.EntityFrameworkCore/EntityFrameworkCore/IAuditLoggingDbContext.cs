using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    [ConnectionStringName(AuditLoggingDbProperties.ConnectionStringName)]
    public interface IAuditLoggingDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}