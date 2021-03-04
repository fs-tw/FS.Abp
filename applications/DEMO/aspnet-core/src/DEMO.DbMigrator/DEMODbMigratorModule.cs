using DEMO.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace DEMO.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DEMOEntityFrameworkCoreDbMigrationsModule),
        typeof(DEMOApplicationContractsModule)
    )]
    public class DEMODbMigratorModule : AbpModule
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