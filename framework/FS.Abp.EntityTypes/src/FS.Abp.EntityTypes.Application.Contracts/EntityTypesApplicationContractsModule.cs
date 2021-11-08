using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(EntityTypesDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class EntityTypesApplicationContractsModule : AbpModule
    {
        
    }
}
