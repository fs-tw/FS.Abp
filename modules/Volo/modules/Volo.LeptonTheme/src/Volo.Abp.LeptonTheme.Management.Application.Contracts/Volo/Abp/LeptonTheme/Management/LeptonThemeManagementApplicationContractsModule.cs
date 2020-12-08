using Volo.Abp.Application;
using Volo.Abp.Modularity;

namespace Volo.Abp.LeptonTheme.Management
{
    [DependsOn(
        typeof(LeptonThemeManagementDomainSharedModule),
        typeof(AbpDddApplicationModule)
        )]
    public class LeptonThemeManagementApplicationContractsModule : AbpModule
    {
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
