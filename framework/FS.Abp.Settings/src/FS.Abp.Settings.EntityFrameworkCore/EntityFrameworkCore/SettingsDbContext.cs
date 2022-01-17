using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Settings.EntityFrameworkCore
{
    [ConnectionStringName(SettingsDbProperties.ConnectionStringName)]
    public class SettingsDbContext : AbpDbContext<SettingsDbContext>, ISettingsDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public SettingsDbContext(DbContextOptions<SettingsDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureSettings();
        }
    }
}