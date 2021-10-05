using FS.CmsKitManagement.Contents;
using FS.CmsKitManagement.EntityType;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(CmsKitManagementDomainSharedModule)
    )]
    [DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule))]
    [DependsOn(typeof(FS.Abp.AbpDomainModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitDomainModule))]
    public class CmsKitManagementDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<EntityTypeOptions>(o =>
            {
                o.Entity<ContentDefinition>(a =>
                {
                    a.AddOrReplace<Volo.CmsKit.Pages.Page>();
                    a.AddOrReplace<Volo.CmsKit.Blogs.Blog>();
                    a.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>();
                });
            });
        }
    }
}
