using Volo.Abp.Modularity;

namespace FS.Abp.Settings
{
    [DependsOn(
        typeof(SettingsApplicationModule),
        typeof(SettingsDomainTestModule)
        )]
    public class SettingsApplicationTestModule : AbpModule
    {

    }
}
