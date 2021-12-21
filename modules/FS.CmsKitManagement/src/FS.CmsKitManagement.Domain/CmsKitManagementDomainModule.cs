using FS.Abp.EntityFeatures;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;
using Volo.CmsKit.Blogs;
using Volo.CmsKit.Menus;
using Volo.CmsKit.Pages;
using FS.CmsKitManagement.MultiLinguals;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(CmsKitManagementDomainSharedModule)
    )]
    [DependsOn(typeof(Volo.CmsKit.CmsKitDomainModule))]
    [DependsOn(typeof(FS.Abp.EntityFeatures.AbpEntityFeaturesDomainModule))]
    public class CmsKitManagementDomainModule : AbpModule
    {

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<EntityFeaturesOptions>(options =>
            {
                options.GetOrAdd<MultiLingual>(a =>
                {
                    a.AddOrReplace<Page>(
                        MultiLingualsEntityFeatureDefinition.Create<Page, PageTranslation>());

                    a.AddOrReplace<Blog>(
                        MultiLingualsEntityFeatureDefinition.Create<Blog, BlogTranslation>());

                    a.AddOrReplace<BlogPost>(
                        MultiLingualsEntityFeatureDefinition.Create<BlogPost, BlogPostTranslation>());

                    a.AddOrReplace<MenuItem>(
                        MultiLingualsEntityFeatureDefinition.Create<MenuItem, MenuItemTranslation>());
                });
            });
        }

    }
}
