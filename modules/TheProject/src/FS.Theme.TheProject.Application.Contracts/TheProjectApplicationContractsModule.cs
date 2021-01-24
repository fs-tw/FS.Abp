using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Modularity;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(TheProjectDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(
        typeof(FS.Theme.ThemeApplicationContractsModule)
        )]
    public class TheProjectApplicationContractsModule : AbpModule
    {

    }
}
