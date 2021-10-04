using FS.CmsKitManagement.Contents;
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
            Configure<ContentsOptions>(o =>
            {
                o.EntityTypes.AddOrReplace<Volo.CmsKit.Pages.Page>();
                o.EntityTypes.AddOrReplace<Volo.CmsKit.Blogs.Blog>();
                o.EntityTypes.AddOrReplace<Volo.CmsKit.Blogs.BlogPost>();
            });
        }
    }
}
