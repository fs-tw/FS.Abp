using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(MetadataDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class MetadataApplicationContractsModule : AbpModule
    {

    }
}
