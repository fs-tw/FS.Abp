using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Modularity;

namespace FS.Theme
{
    [DependsOn(
        typeof(ThemeDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(
        typeof(FS.Abp.AbpApplicationContractsModule)
        )]
    public class ThemeApplicationContractsModule : AbpModule
    {

    }
}
