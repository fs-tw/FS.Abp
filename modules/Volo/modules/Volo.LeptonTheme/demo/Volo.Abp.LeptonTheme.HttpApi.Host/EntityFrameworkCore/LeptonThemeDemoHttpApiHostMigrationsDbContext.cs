using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;

namespace Volo.Abp.LeptonTheme.HttpApi.Host.EntityFrameworkCore
{
    public class LeptonThemeDemoHttpApiHostMigrationsDbContext : AbpDbContext<LeptonThemeDemoHttpApiHostMigrationsDbContext>
    {
        public LeptonThemeDemoHttpApiHostMigrationsDbContext(DbContextOptions<LeptonThemeDemoHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureAuditLogging();
            modelBuilder.ConfigurePermissionManagement();
            modelBuilder.ConfigureSettingManagement();
        }
    }
}
