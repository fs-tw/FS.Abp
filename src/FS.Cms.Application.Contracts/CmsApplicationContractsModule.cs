using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Authorization;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(
        typeof(FS.Abp.AbpApplicationContractsModule)//,
        //typeof(FS.Abp.CodingManagement.CodingManagementApplicationContractsModule)
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
