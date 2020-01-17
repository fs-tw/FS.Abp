using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Cms.EntityFrameworkCore
{
    public class MyProjectHttpApiHostMigrationsDbContext : AbpDbContext<MyProjectHttpApiHostMigrationsDbContext>
    {
        public MyProjectHttpApiHostMigrationsDbContext(DbContextOptions<MyProjectHttpApiHostMigrationsDbContext> options)
            : base(options)
        {
        
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ConfigureCms();

            base.OnModelCreating(modelBuilder);
        }
    }
}
