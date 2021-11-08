using Volo.Abp.Modularity;

namespace FS.Abp.SettingManagement
{
    [DependsOn(typeof(Volo.Abp.SettingManagement.AbpSettingManagementDomainModule))]
    public class AbpSettingManagementDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }

    }

}
