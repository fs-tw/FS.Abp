using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.Settings
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(SettingsDomainSharedModule)
    )]
    public class SettingsDomainModule : AbpModule
    {

    }
}
