using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.EntityFrameworkCore
{
    [ConnectionStringName(SaasDbProperties.ConnectionStringName)]
    public class SaasDbContext : AbpDbContext<SaasDbContext>, ISaasDbContext
    {
        public DbSet<Tenant> Tenants { get; set; }
        
        public DbSet<Edition> Editions { get; set; }

        public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

        public SaasDbContext(DbContextOptions<SaasDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureSaas();
        }
    }
}