using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.Zero.Domain.AbpZeroDomainModule),
        typeof(FS.Abp.Trees.TreesDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {

    }
}
