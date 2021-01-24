using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(TheProjectDomainSharedModule)
    )]
    [DependsOn(
        typeof(FS.Theme.ThemeDomainModule)
        )]
    public class TheProjectDomainModule : AbpModule
    {

    }
}
