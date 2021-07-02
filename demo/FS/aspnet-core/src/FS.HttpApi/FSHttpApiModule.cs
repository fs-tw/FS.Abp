using Localization.Resources.AbpUi;
using FS.Localization;
using Volo.Abp.Account;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.HttpApi;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;
using MediatR;

namespace FS
{
    [DependsOn(
        typeof(FSApplicationContractsModule),
        typeof(AbpAccountHttpApiModule),
        typeof(AbpIdentityHttpApiModule),
        typeof(AbpPermissionManagementHttpApiModule),
        typeof(AbpTenantManagementHttpApiModule),
        typeof(AbpFeatureManagementHttpApiModule),
        typeof(AbpSettingManagementHttpApiModule)
        )]
    [DependsOn(
        typeof(FS.Abp.AbpHttpApiModule)
        )]
    [DependsOn(
        typeof(FS.CmsKitManagement.CmsKitManagementHttpApiModule)
        )]
    [DependsOn(typeof(EasyAbp.EShop.EShopHttpApiModule))]
    public class FSHttpApiModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            ConfigureLocalization();

            context.Services.AddMediatR(typeof(FSHttpApiModule));
        }

        private void ConfigureLocalization()
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<FSResource>()
                    .AddBaseTypes(
                        typeof(AbpUiResource)
                    );
            });
        }
    }
}
