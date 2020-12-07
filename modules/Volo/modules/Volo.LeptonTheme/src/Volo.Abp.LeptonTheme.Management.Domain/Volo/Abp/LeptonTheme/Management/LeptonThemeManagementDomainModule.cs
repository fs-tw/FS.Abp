using Volo.Abp.Modularity;

namespace Volo.Abp.LeptonTheme.Management
{
    [DependsOn(
        typeof(LeptonThemeManagementDomainSharedModule)
        )]
    public class LeptonThemeManagementDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<LeptonThemeManagementDomainModule>(context);
        }
    }
}
