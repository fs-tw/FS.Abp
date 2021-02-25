using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Wbm.EntityFrameworkCore
{
    public class WbmHttpApiHostMigrationsDbContext : AbpDbContext<WbmHttpApiHostMigrationsDbContext>
    {
        public WbmHttpApiHostMigrationsDbContext(DbContextOptions<WbmHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureWbm();
        }
    }
}
