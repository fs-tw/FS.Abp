using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityFeatures;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(EntityFeaturesDomainSharedModule)
)]
public class EntityFeaturesDomainModule : AbpModule
{

}
