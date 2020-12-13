using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;

namespace FS.Theme.EntityFrameworkCore
{
    public class MyProjectHttpApiHostMigrationsDbContext : AbpDbContext<MyProjectHttpApiHostMigrationsDbContext>
    {
        public MyProjectHttpApiHostMigrationsDbContext(DbContextOptions<MyProjectHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureTheme();
            modelBuilder.ConfigureAuditLogging();
            modelBuilder.ConfigurePermissionManagement();
            modelBuilder.ConfigureSettingManagement();
        }
    }
}
