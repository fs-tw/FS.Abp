using Volo.Abp.Modularity;

namespace FS.Entity.EntityFeatures;

[DependsOn(
    typeof(EntityFeaturesApplicationModule),
    typeof(EntityFeaturesDomainTestModule)
    )]
public class EntityFeaturesApplicationTestModule : AbpModule
{

}
