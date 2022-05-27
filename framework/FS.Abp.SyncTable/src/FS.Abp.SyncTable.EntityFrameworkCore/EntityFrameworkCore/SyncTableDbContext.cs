using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.SyncTable.EntityFrameworkCore;

[ConnectionStringName(SyncTableDbProperties.ConnectionStringName)]
public class SyncTableDbContext : AbpDbContext<SyncTableDbContext>, ISyncTableDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public SyncTableDbContext(DbContextOptions<SyncTableDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureSyncTable();
    }
}
