using Volo.Abp.Modularity;

namespace Volo.Abp.LeptonTheme.Management
{
    [DependsOn(
        typeof(LeptonThemeManagementApplicationModule),
        typeof(LeptonThemeManagementDomainTestModule)
        )]
    public class LeptonThemeManagementApplicationTestModule : AbpModule
    {

    }
}
