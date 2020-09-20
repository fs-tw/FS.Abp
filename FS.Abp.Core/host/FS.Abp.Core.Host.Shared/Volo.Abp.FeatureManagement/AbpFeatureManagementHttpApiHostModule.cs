using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo.Abp.FeatureManagement.Host.HttpApi
{
    [DependsOn(
        typeof(AbpFeatureManagementApplicationModule),
        typeof(AbpFeatureManagementHttpApiModule),
        typeof(AbpFeatureManagementEntityFrameworkCoreModule)
        )]
    public class AbpFeatureManagementHttpApiHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
