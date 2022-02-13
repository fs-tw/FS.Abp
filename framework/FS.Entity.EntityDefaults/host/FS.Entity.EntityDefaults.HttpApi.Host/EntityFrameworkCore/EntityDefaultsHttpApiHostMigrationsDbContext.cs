using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Entity.EntityDefaults.EntityFrameworkCore;

public class EntityDefaultsHttpApiHostMigrationsDbContext : AbpDbContext<EntityDefaultsHttpApiHostMigrationsDbContext>
{
    public EntityDefaultsHttpApiHostMigrationsDbContext(DbContextOptions<EntityDefaultsHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureEntityDefaults();
    }
}
