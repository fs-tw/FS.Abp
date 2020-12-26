using FS.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace FS.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(FSEntityFrameworkCoreDbMigrationsModule),
        typeof(FSApplicationContractsModule)
        )]
    public class FSDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
