﻿using FS.Abp.Demo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace FS.Abp.Demo.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(DemoEntityFrameworkCoreModule),
        typeof(DemoApplicationContractsModule)
        )]
    public class DemoDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
