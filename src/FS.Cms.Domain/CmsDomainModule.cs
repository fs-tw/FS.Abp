using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.Zero.Domain.AbpZeroDomainModule)
        )]
    public class CmsDomainModule : AbpModule
    {

    }
}
