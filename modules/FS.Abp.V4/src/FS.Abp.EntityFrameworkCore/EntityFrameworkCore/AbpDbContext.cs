using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.EntityFrameworkCore
{
    [ConnectionStringName(AbpDbProperties.ConnectionStringName)]
    public class AbpDbContext : AbpDbContext<AbpDbContext>, IAbpDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public AbpDbContext(DbContextOptions<AbpDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureAbp();
        }
    }
}