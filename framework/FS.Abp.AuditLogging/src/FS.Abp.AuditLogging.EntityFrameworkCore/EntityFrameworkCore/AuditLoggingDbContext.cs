using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    [ConnectionStringName(AuditLoggingDbProperties.ConnectionStringName)]
    public class AuditLoggingDbContext : AbpDbContext<AuditLoggingDbContext>, IAuditLoggingDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public AuditLoggingDbContext(DbContextOptions<AuditLoggingDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureAuditLogging();
        }
    }
}