using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Settings.EntityFrameworkCore
{
    public class SettingsHttpApiHostMigrationsDbContext : AbpDbContext<SettingsHttpApiHostMigrationsDbContext>
    {
        public SettingsHttpApiHostMigrationsDbContext(DbContextOptions<SettingsHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureSettings();
        }
    }
}
