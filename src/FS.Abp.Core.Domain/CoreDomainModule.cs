using Volo.Abp.Modularity;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreDomainSharedModule),
        typeof(Volo.Abp.Specifications.AbpSpecificationsModule),
        typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule)
        )]
    public class CoreDomainModule : AbpModule
    {

    }
}
