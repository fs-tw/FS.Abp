using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account.Admin.Web.Settings;
using Volo.Abp.Account.Localization;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.Modularity;
using Volo.Abp.SettingManagement.Web;
using Volo.Abp.SettingManagement.Web.Pages.SettingManagement;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.Account.Admin.Web
{
    [DependsOn(typeof(AbpAccountAdminHttpApiModule))]
    [DependsOn(typeof(AbpSettingManagementWebModule))]
    [DependsOn(typeof(AbpAspNetCoreMvcUiThemeCommercialModule))]
    public class AbpAccountAdminWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(
                    typeof(AccountResource),
                    typeof(AbpAccountAdminApplicationContractsModule).Assembly,
                    typeof(AbpAccountAdminWebModule).Assembly
                );
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpAccountAdminWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var config = context.Services.GetConfiguration();

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpAccountAdminWebModule>();
            });

            Configure<SettingManagementPageOptions>(options =>
            {
                options.Contributors.Add(new AccountSettingManagementPageContributor());
            });

            Configure<AbpBundlingOptions>(options =>
            {
                options.ScriptBundles
                    .Configure(typeof(Volo.Abp.SettingManagement.Web.Pages.SettingManagement.IndexModel).FullName,
                        configuration =>
                        {
                            configuration.AddFiles("/Pages/Account/Components/AccountSettingGroup/Default.js");
                        });
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<AbpAccountAdminWebModule>(context);
        }
    }
}
