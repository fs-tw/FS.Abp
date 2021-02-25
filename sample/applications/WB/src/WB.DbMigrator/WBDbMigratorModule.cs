using WB.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace WB.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(WBEntityFrameworkCoreDbMigrationsModule),
        typeof(WBApplicationContractsModule)
        )]
    public class WBDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
