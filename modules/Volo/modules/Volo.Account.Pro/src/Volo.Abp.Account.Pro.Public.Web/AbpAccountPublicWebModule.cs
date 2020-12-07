using System;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using Owl.reCAPTCHA;
using Owl.reCAPTCHA.v2;
using Owl.reCAPTCHA.v3;
using Volo.Abp.Account.Localization;
using Volo.Abp.Account.Public.Web.Ldap;
using Volo.Abp.Account.Public.Web.Pages.Account;
using Volo.Abp.Account.Public.Web.ProfileManagement;
using Volo.Abp.AspNetCore.MultiTenancy;
using Volo.Abp.Account.Public.Web.Security.Recaptcha;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.CropperJs;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.Uppy;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.PageToolbars;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;
using Volo.Abp.AutoMapper;
using Volo.Abp.Emailing;
using Volo.Abp.Localization;
using Volo.Abp.Identity;
using Volo.Abp.Identity.AspNetCore;
using Volo.Abp.Modularity;
using Volo.Abp.Security;
using Volo.Abp.Sms;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.Account.Public.Web
{
    [DependsOn(typeof(AbpAccountPublicHttpApiModule))]
    [DependsOn(typeof(AbpIdentityAspNetCoreModule))]
    [DependsOn(typeof(AbpAspNetCoreMvcUiThemeCommercialModule))]
    [DependsOn(typeof(AbpEmailingModule))]
    [DependsOn(typeof(AbpSmsModule))]
    [DependsOn(typeof(AbpSecurityModule))]
    [DependsOn(typeof(AbpAutoMapperModule))]
    [DependsOn(typeof(AbpAspNetCoreMultiTenancyModule))]
    public class AbpAccountPublicWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(
                    typeof(AccountResource),
                    typeof(AbpAccountPublicApplicationContractsModule).Assembly,
                    typeof(AbpAccountPublicWebModule).Assembly
                );
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpAccountPublicWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpAccountPublicWebModule>();
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AbpAccountUserMenuContributor());
            });

            Configure<AbpToolbarOptions>(options =>
            {
                options.Contributors.Add(new AccountModuleToolbarContributor());
            });

            context.Services.AddAutoMapperObjectMapper<AbpAccountPublicWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpAccountProPublicWebAutomapperProfile>(validate: true);
            });

            Configure<AbpIdentityOptions>(options =>
            {
                options.ExternalLoginProviders.Add<LdapExternalLoginProvider>(LdapExternalLoginProvider.Name);
            });

            ConfigureProfileManagement();
            ConfigureCaptcha(context);
        }

        private void ConfigureProfileManagement()
        {
            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/Account/Manage");
            });

            Configure<ProfileManagementPageOptions>(options =>
            {
                options.Contributors.Add(new AccountProfileManagementPageContributor());
            });

            Configure<AbpBundlingOptions>(options =>
            {
                options.ScriptBundles
                    .Configure(typeof(ManageModel).FullName,
                        configuration =>
                        {
                            configuration.AddFiles("/Pages/Account/Components/ProfileManagementGroup/Password/Default.js");
                            configuration.AddFiles("/Pages/Account/Components/ProfileManagementGroup/ProfilePicture/Default.js");
                            configuration.AddFiles("/Pages/Account/Components/ProfileManagementGroup/PersonalInfo/Default.js");
                            configuration.AddFiles("/Pages/Account/Components/ProfileManagementGroup/TwoFactor/Default.js");
                            configuration.AddFiles("/Pages/Account/Components/ProfileManagementGroup/LinkUsers/Default.js");
                            configuration.AddContributors(typeof(UppyScriptContributor));
                            configuration.AddContributors(typeof(CropperJsScriptContributor));
                        });
                options.StyleBundles
                    .Configure(typeof(ManageModel).FullName,
                        configuration =>
                        {
                            configuration.AddFiles("/Pages/Account/Components/ProfileManagementGroup/ProfilePicture/Default.css");
                            configuration.AddContributors(typeof(CropperJsStyleContributor));
                        });
            });
        }

        private void ConfigureCaptcha(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDynamicOptions<reCAPTCHAOptions, AbpRecaptchaOptionsManager>();

            var configuration = context.Services.GetConfiguration();

            if (!configuration["Recaptcha"].IsNullOrEmpty())
            {
                Configure<reCAPTCHAOptions>(reCAPTCHAConsts.V2, configuration.GetSection("Recaptcha"));
                Configure<reCAPTCHAOptions>(reCAPTCHAConsts.V3, configuration.GetSection("Recaptcha"));
            }

            context.Services.AddTransient<IreCAPTCHALanguageCodeProvider, CultureInforeCAPTCHALanguageCodeProvider>();
            context.Services.AddTransient<IreCAPTCHASiteVerifyV2, reCAPTCHASiteVerifyV2>();
            context.Services.AddTransient<IreCAPTCHASiteVerifyV3, reCAPTCHASiteVerifyV3>();
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<AbpAccountPublicWebModule>(context);
        }
    }
}
