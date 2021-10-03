using CrystalQuartzSample.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace CrystalQuartzSample.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(CrystalQuartzSampleEntityFrameworkCoreModule),
        typeof(CrystalQuartzSampleApplicationContractsModule)
        )]
    public class CrystalQuartzSampleDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
