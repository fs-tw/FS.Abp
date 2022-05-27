using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.SyncTable.EntityFrameworkCore;

[ConnectionStringName(SyncTableDbProperties.ConnectionStringName)]
public interface ISyncTableDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
