using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Core.EntityFrameworkCore
{
    [ConnectionStringName(CoreDbProperties.ConnectionStringName)]
    public class CoreDbContext : AbpDbContext<CoreDbContext>, ICoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public CoreDbContext(DbContextOptions<CoreDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureCore();
        }
    }
}