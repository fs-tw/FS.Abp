using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Coding.EntityFrameworkCore;

[ConnectionStringName(CodingDbProperties.ConnectionStringName)]
public class CodingDbContext : AbpDbContext<CodingDbContext>, ICodingDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public CodingDbContext(DbContextOptions<CodingDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureCoding();
    }
}
