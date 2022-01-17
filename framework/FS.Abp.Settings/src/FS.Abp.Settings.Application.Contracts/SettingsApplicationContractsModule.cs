using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.Settings
{
    [DependsOn(
        typeof(SettingsDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class SettingsApplicationContractsModule : AbpModule
    {

    }
}
