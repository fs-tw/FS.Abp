using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    [DependsOn(typeof(AbpAuditLoggingEntityFrameworkCoreModule))]
    public class AuditLoggingEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<AuditLoggingDbContext>(options =>
            {
                /* Remove "includeAllEntities: true" to create
                 * default repositories only for aggregate roots */
                options.AddDefaultRepositories(includeAllEntities: true);
            });

            Configure<AbpDbContextOptions>(options =>
            {
                /* The main point to change your DBMS.
                 * See also AuditLoggingMigrationsDbContextFactory for EF Core tooling. */
                //options.UseSqlServer();
                //options.UseNpgsql();
                options.Configure<AuditLoggingDbContext>(o => o.UseNpgsql());
            });
        }
    }
}
