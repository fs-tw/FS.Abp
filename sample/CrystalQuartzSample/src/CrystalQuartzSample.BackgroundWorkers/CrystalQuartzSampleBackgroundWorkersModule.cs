using Volo.Abp.Account;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;

namespace CrystalQuartzSample
{
    [DependsOn(
        typeof(CrystalQuartzSampleApplicationModule)
        )]
    [DependsOn(typeof(Volo.Abp.BackgroundWorkers.Quartz.AbpBackgroundWorkersQuartzModule))]
    public class CrystalQuartzSampleBackgroundWorkersModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
