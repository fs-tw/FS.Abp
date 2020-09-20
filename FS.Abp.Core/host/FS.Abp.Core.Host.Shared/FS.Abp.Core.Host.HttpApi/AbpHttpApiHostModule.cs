using Volo.Abp.Modularity;

namespace FS.Abp.Core.Host.HttpApi
{
    [DependsOn(
        typeof(Volo.Abp.Account.Host.HttpApi.AbpAccountHttpApiHostModule),
        typeof(Volo.Abp.Identity.Host.HttpApi.AbpIdentityHttpApiHostModule),
        typeof(Volo.Abp.PermissionManagement.Host.HttpApi.AbpPermissionManagementHttpApiHostModule),
        typeof(Volo.Abp.FeatureManagement.Host.HttpApi.AbpFeatureManagementHttpApiHostModule),
        typeof(Volo.Abp.TenantManagement.Host.HttpApi.AbpTenantManagementHttpApiHostModule)


        )]
    public class AbpHttpApiHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
