using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(EntityTypesDomainSharedModule)
    )]
    public class EntityTypesDomainModule : AbpModule
    {

    }
}
