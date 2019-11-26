using Localization.Resources.AbpUi;
using Volo.Abp.Account;
using Volo.Abp.Account.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy;
using Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy.Localization;
using Volo.Abp.Identity;
using Volo.Abp.Identity.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Localization.Resources.AbpValidation;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.Localization;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.Localization;
using Volo.Abp.UI.Navigation.Localization.Resource;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.Localization
{

    [DependsOn(
        typeof(Volo.Abp.Localization.AbpLocalizationModule),
        typeof(AbpAccountApplicationContractsModule),
        typeof(AbpIdentityDomainSharedModule),
        typeof(AbpPermissionManagementDomainSharedModule),
        typeof(AbpTenantManagementDomainSharedModule),
        typeof(AbpAspNetCoreMvcUiMultiTenancyModule)
    )]
    public class AbpLocalizationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpLocalizationModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AbpValidationResource>()
                    .AddVirtualJson("/Localization/AbpValidation");
                options.Resources
                    .Get<IdentityResource>()
                    .AddVirtualJson("/Localization/AbpIdentity");
                options.Resources
                    .Get<AccountResource>()
                    .AddVirtualJson("/Localization/AbpAccount");
                options.Resources
                    .Get<AbpUiMultiTenancyResource>()
                    .AddVirtualJson("/Localization/AbpMultiTenancy");
                options.Resources
                    .Get<AbpPermissionManagementResource>()
                    .AddVirtualJson("/Localization/AbpPermissionManagement");
                options.Resources
                    .Get<AbpTenantManagementResource>()
                    .AddVirtualJson("/Localization/AbpTenantManagement");
                options.Resources
                    .Get<AbpUiResource>()
                    .AddVirtualJson("/Localization/AbpUi");
                options.Resources
                    .Get<AbpUiNavigationResource>()
                    .AddVirtualJson("/Localization/AbpUiNavigation");
                
            });
        }
    }
}
