using CFTA.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace CFTA.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(CFTAEntityFrameworkCoreModule),
        typeof(CFTAApplicationContractsModule)
        )]
    public class CFTADbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
