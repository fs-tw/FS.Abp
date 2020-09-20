using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class CoreApplicationContractsModule : AbpModule
    {

    }
}
