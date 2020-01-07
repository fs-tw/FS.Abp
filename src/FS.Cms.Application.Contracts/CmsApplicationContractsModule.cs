using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Authorization;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule),
        typeof(FS.Abp.Trees.TreesApplicationContractsModule)
        )]
    public class CmsApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CmsApplicationContractsModule>("FS.Cms");
            });
        }
    }
}
