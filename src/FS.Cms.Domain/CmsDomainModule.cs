using Volo.Abp.Modularity;

namespace FS.Cms
{
    [DependsOn(
        typeof(CmsDomainSharedModule),
        typeof(FS.Abp.Domain.AbpDddDomainModule)

        )]
    public class CmsDomainModule : AbpModule
    {

    }
}
