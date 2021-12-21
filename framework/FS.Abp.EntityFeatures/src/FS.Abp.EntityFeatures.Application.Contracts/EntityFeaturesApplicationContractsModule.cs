using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.EntityFeatures
{
    [DependsOn(
        typeof(EntityFeaturesDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class EntityFeaturesApplicationContractsModule : AbpModule
    {

    }
}
