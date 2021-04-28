using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    public class CmsKitManagementHttpApiHostMigrationsDbContext : AbpDbContext<CmsKitManagementHttpApiHostMigrationsDbContext>
    {
        public CmsKitManagementHttpApiHostMigrationsDbContext(DbContextOptions<CmsKitManagementHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureCmsKitManagement();
        }
    }
}
