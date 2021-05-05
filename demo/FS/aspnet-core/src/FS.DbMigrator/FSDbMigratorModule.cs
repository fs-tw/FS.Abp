using FS.EntityFrameworkCore;
using System.Collections.Generic;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.GlobalFeatures;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.GlobalFeatures;
using Volo.CmsKit.Localization;
using Volo.CmsKit.MediaDescriptors;
using Volo.CmsKit.Tags;

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
            Configure<CmsKitMediaOptions>(opts =>
            {
                if (GlobalFeatureManager.Instance.IsEnabled<BlogsFeature>())
                {
                    opts.EntityTypes.AddIfNotContains(
                        new MediaDescriptorDefinition(
                            BlogPostConsts.EntityType));
                }
            });
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
