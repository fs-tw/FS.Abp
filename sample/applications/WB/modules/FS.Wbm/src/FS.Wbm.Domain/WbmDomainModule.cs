using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Wbm
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(WbmDomainSharedModule)
    )]
    [DependsOn(typeof(FS.Abp.AbpDomainModule))]
    public class WbmDomainModule : AbpModule
    {

    }
}
