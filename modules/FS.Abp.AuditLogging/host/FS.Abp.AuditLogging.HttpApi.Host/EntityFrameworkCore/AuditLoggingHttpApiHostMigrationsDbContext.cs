using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    public class AuditLoggingHttpApiHostMigrationsDbContext : AbpDbContext<AuditLoggingHttpApiHostMigrationsDbContext>
    {
        public AuditLoggingHttpApiHostMigrationsDbContext(DbContextOptions<AuditLoggingHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureAuditLogging();
        }
    }
}
