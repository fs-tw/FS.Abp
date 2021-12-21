using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityFeatures
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(AbpEntityFeaturesDomainSharedModule)
    )]
    public class AbpEntityFeaturesDomainModule : AbpModule
    {

    }
}
