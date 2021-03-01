using FS.Abp.EntitySettings;
using System;
using Volo.Abp.Modularity;
using Volo.Abp.SettingManagement;
using Volo.Abp.Settings;

namespace FS.Abp.Coding
{
    [DependsOn(
        typeof(AbpSettingManagementDomainModule)
        )]
    public class AbpEntitySettingModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpSettingOptions>(options =>
            {
                options.ValueProviders.Add<EntitySettingValueProvider>();
            });
            Configure<SettingManagementOptions>(options =>
            {
                options.Providers.Add<EntitySettingManagementProvider>();
            });
        }
    }
}
