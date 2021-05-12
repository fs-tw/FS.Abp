using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(FS.Abp.AbpApplicationContractsModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitApplicationContractsModule))]
    public class CmsKitManagementApplicationContractsModule : AbpModule
    {

    }
}
