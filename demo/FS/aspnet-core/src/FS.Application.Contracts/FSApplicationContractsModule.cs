using Volo.Abp.Account;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.PermissionManagement;
using Volo.Abp.SettingManagement;
using Volo.Abp.TenantManagement;
using Volo.Abp.Threading;
using Volo.CmsKit.GlobalFeatures;
using Volo.Abp.GlobalFeatures;
using Volo.CmsKit;
using Volo.Abp;
using FS.Abp.AspNetCore.Mvc.JsonSubTypes;

namespace FS
{
    [DependsOn(
        typeof(FSDomainSharedModule),
        typeof(AbpAccountApplicationContractsModule),
        typeof(AbpFeatureManagementApplicationContractsModule),
        typeof(AbpIdentityApplicationContractsModule),
        typeof(AbpPermissionManagementApplicationContractsModule),
        typeof(AbpTenantManagementApplicationContractsModule),
        typeof(AbpSettingManagementApplicationContractsModule),
        typeof(AbpObjectExtendingModule)
    )]

    [DependsOn(
        typeof(FS.Abp.AbpApplicationContractsModule)
        )]
    [DependsOn(typeof(FS.CmsKitManagement.CmsKitManagementApplicationContractsModule))]

    public class FSApplicationContractsModule : AbpModule
    {
        public override void OnPreApplicationInitialization(ApplicationInitializationContext context)
        {
            base.OnPreApplicationInitialization(context);
        }
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            FSDtoExtensions.Configure();
        }
    }
}
