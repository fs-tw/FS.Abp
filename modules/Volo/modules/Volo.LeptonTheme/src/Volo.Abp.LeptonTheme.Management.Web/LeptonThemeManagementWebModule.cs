using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.LeptonTheme.Management.Localization;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.Authorization;
using Volo.Abp.AutoMapper;
using Volo.Abp.LeptonTheme.Management.Settings;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.LeptonTheme.Management
{
    [DependsOn(typeof(LeptonThemeManagementHttpApiModule))]
    [DependsOn(typeof(AbpAspNetCoreMvcUiThemeSharedModule))]
    [DependsOn(typeof(AbpAutoMapperModule))]
    [DependsOn(typeof(AbpAuthorizationModule))]
    public class LeptonThemeManagementWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(LeptonThemeManagementResource), typeof(LeptonThemeManagementWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(LeptonThemeManagementWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new LeptonThemeManagementMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<LeptonThemeManagementWebModule>();
            });

            context.Services.AddAutoMapperObjectMapper<LeptonThemeManagementWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LeptonThemeManagementWebAutoMapperProfile>(validate: true);
            });

            Configure<SettingManagement.Web.Pages.SettingManagement.SettingManagementPageOptions>(options =>
            {
                options.Contributors.Add(new LeptonThemeSettingManagementPageContributor());
            });

            Configure<AbpBundlingOptions>(options =>
            {
                options.ScriptBundles
                    .Configure(typeof(SettingManagement.Web.Pages.SettingManagement.IndexModel).FullName,
                        configuration =>
                        {
                            configuration.AddFiles("/Pages/LeptonThemeManagement/Components/LeptonThemeSettingGroup/Default.js");
                        });
            });

            Configure<RazorPagesOptions>(options =>
            {
                //Configure authorization.
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<LeptonThemeManagementWebModule>(context);
        }
    }
}
