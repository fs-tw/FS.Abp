using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Entity.MultiLinguals
{
    [DependsOn(
        typeof(MultiLingualsDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class MultiLingualsApplicationContractsModule : AbpModule
    {

    }
}


