using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    [ConnectionStringName("AbpAuditLogging")]
    public class AuditLoggingDbContext : 
        AbpDbContext<AuditLoggingDbContext>
    {
        
        public AuditLoggingDbContext(DbContextOptions<AuditLoggingDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            /* Include modules to your migration db context */

            builder.ConfigureAuditLogging();

            /* Configure your own tables/entities inside here */

            //builder.Entity<YourEntity>(b =>
            //{
            //    b.ToTable(AuditLoggingConsts.DbTablePrefix + "YourEntities", AuditLoggingConsts.DbSchema);
            //    b.ConfigureByConvention(); //auto configure for the base class props
            //    //...
            //});
        }
    }
}
