using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Wbm
{
    [DependsOn(
        typeof(WbmDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(FS.Abp.AbpApplicationContractsModule))]
    public class WbmApplicationContractsModule : AbpModule
    {

    }
}
