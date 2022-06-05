using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Coding.Codes.EntityFrameworkCore;

[ConnectionStringName(CodesDbProperties.ConnectionStringName)]
public class CodesDbContext : AbpDbContext<CodesDbContext>, ICodesDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public CodesDbContext(DbContextOptions<CodesDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureCodes();
    }
}
