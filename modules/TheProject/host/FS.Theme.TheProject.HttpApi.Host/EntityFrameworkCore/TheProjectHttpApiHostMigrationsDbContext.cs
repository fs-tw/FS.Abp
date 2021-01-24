using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Theme.TheProject.EntityFrameworkCore
{
    public class TheProjectHttpApiHostMigrationsDbContext : AbpDbContext<TheProjectHttpApiHostMigrationsDbContext>
    {
        public TheProjectHttpApiHostMigrationsDbContext(DbContextOptions<TheProjectHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureTheProject();
        }
    }
}
