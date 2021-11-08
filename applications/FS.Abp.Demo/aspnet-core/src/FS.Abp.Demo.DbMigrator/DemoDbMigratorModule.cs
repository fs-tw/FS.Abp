using FS.Abp.Demo.EntityFrameworkCore;
using System.Collections.Generic;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.GlobalFeatures;
using Volo.Abp.Modularity;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.GlobalFeatures;
using Volo.CmsKit.MediaDescriptors;
using Volo.CmsKit.Pages;
using Volo.CmsKit.Permissions;

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


            Configure<CmsKitMediaOptions>(options =>
            {
                //if (GlobalFeatureManager.Instance.IsEnabled<BlogsFeature>())
                {
                    options.EntityTypes.AddIfNotContains(
                        new MediaDescriptorDefinition(
                            BlogPostConsts.EntityType,
                            createPolicies: new[]
                            {
                                    CmsKitAdminPermissions.BlogPosts.Create,
                                    CmsKitAdminPermissions.BlogPosts.Update
                            },
                            deletePolicies: new[]
                            {
                                    CmsKitAdminPermissions.BlogPosts.Create,
                                    CmsKitAdminPermissions.BlogPosts.Update,
                                    CmsKitAdminPermissions.BlogPosts.Delete
                            }));
                }

                //if (GlobalFeatureManager.Instance.IsEnabled<PagesFeature>())
                {
                    options.EntityTypes.AddIfNotContains(
                        new MediaDescriptorDefinition(
                            PageConsts.EntityType,
                            createPolicies: new[]
                            {
                                    CmsKitAdminPermissions.Pages.Create,
                                    CmsKitAdminPermissions.Pages.Update
                            },
                            deletePolicies: new[]
                            {
                                    CmsKitAdminPermissions.Pages.Create,
                                    CmsKitAdminPermissions.Pages.Update,
                                    CmsKitAdminPermissions.Pages.Delete
                            }));
                }
            });
        }
    }
}
