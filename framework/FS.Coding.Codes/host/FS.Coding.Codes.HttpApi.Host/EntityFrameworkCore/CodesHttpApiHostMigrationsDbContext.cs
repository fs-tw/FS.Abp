using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Coding.Codes.EntityFrameworkCore;

public class CodesHttpApiHostMigrationsDbContext : AbpDbContext<CodesHttpApiHostMigrationsDbContext>
{
    public CodesHttpApiHostMigrationsDbContext(DbContextOptions<CodesHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureCodes();
    }
}
