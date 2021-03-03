using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Theme.TheProject.EntityFrameworkCore
{
    [ConnectionStringName(TheProjectDbProperties.ConnectionStringName)]
    public class TheProjectDbContext : AbpDbContext<TheProjectDbContext>, ITheProjectDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public TheProjectDbContext(DbContextOptions<TheProjectDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureTheProject();
        }
    }
}