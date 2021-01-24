using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Theme.EntityFrameworkCore
{
    public class ThemeHttpApiHostMigrationsDbContext : AbpDbContext<ThemeHttpApiHostMigrationsDbContext>
    {
        public ThemeHttpApiHostMigrationsDbContext(DbContextOptions<ThemeHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureTheme();
        }
    }
}
