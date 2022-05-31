using FS.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AuditLoggingEntityFrameworkCoreModule)
        )]
    [DependsOn(typeof(Volo.Abp.EntityFrameworkCore.PostgreSql.AbpEntityFrameworkCorePostgreSqlModule))]
    public class AuditLoggingDbMigratorModule : AbpModule
    {
    }
}
