using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.SettingManagement;

namespace Volo.Abp.LeptonTheme.Management
{
    [DependsOn(
        typeof(LeptonThemeManagementDomainModule),
        typeof(LeptonThemeManagementApplicationContractsModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpSettingManagementDomainModule)
        )]
    public class LeptonThemeManagementApplicationModule : AbpModule
    {
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<LeptonThemeManagementApplicationModule>(context);
        }
    }
}
