using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Coding.EntityFrameworkCore;

public class CodingHttpApiHostMigrationsDbContext : AbpDbContext<CodingHttpApiHostMigrationsDbContext>
{
    public CodingHttpApiHostMigrationsDbContext(DbContextOptions<CodingHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigureCoding();
    }
}
