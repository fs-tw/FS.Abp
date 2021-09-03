using FS.Abp.Demo.EntityFrameworkCore;
using System.Collections.Generic;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.BlobStoring;
using Volo.Abp.GlobalFeatures;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.GlobalFeatures;
using Volo.CmsKit.MediaDescriptors;

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

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<DemoDbMigratorModule>();
            });

            Configure<CmsKitMediaOptions>(opts =>
            {
                if (GlobalFeatureManager.Instance.IsEnabled<BlogsFeature>())
                {
                    opts.EntityTypes.AddIfNotContains(
                        new MediaDescriptorDefinition(
                            BlogPostConsts.EntityType));
                }
            });
        }
    }
}
