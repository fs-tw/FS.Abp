using Volo.Abp.Modularity;

namespace FS.Abp.EntityFeatures
{
    [DependsOn(
        typeof(EntityFeaturesApplicationModule),
        typeof(EntityFeaturesDomainTestModule)
        )]
    public class EntityFeaturesApplicationTestModule : AbpModule
    {

    }
}
