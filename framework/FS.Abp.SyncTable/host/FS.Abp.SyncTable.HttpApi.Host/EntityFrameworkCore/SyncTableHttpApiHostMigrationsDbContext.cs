using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.SyncTable.EntityFrameworkCore;

public class SyncTableHttpApiHostMigrationsDbContext : AbpDbContext<SyncTableHttpApiHostMigrationsDbContext>
{
    public SyncTableHttpApiHostMigrationsDbContext(DbContextOptions<SyncTableHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureSyncTable();
    }
}
