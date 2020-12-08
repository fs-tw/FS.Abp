using Volo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Volo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(VoloEntityFrameworkCoreDbMigrationsModule),
        typeof(VoloApplicationContractsModule)
    )]
    public class VoloDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options =>
            {
                options.IsJobExecutionEnabled = false;
            });
        }
    }
}