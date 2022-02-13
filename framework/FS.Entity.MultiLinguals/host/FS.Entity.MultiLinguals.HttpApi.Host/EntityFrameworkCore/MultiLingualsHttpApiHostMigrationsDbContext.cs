using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Entity.MultiLinguals.EntityFrameworkCore;

public class MultiLingualsHttpApiHostMigrationsDbContext : AbpDbContext<MultiLingualsHttpApiHostMigrationsDbContext>
{
    public MultiLingualsHttpApiHostMigrationsDbContext(DbContextOptions<MultiLingualsHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureMultiLinguals();
    }
}
