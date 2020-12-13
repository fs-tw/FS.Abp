using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Theme
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(ThemeDomainSharedModule)
    )]
    [DependsOn(
        typeof(FS.Abp.AbpDomainModule)
        )]
    public class ThemeDomainModule : AbpModule
    {

    }
}
