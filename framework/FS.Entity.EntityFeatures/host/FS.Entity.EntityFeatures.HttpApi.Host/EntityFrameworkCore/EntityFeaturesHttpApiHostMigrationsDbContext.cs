using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Entity.EntityFeatures.EntityFrameworkCore;

public class EntityFeaturesHttpApiHostMigrationsDbContext : AbpDbContext<EntityFeaturesHttpApiHostMigrationsDbContext>
{
    public EntityFeaturesHttpApiHostMigrationsDbContext(DbContextOptions<EntityFeaturesHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureEntityFeatures();
    }
}
