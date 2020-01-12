using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.Domain.AbpDddDomainModule),
        typeof(FS.Abp.Trees.TreesDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {

    }
}
