using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy;
using Volo.Abp.AspNetCore.Mvc.UI.Packages.JsTree;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.ObjectMapping;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Libraries.JsTree;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Toolbars;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;
using Volo.Abp.AspNetCore.Mvc.UI.Theming;
using Volo.Abp.AspNetCore.VirtualFileSystem;
using Volo.Abp.AutoMapper;
using Volo.Abp.LeptonTheme.Management;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton
{
    [DependsOn(
        typeof(AbpAspNetCoreMvcUiMultiTenancyModule),
        typeof(LeptonThemeManagementWebModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpAspNetCoreMvcUiThemeCommercialModule)
        )]
    public class AbpAspNetCoreMvcUiLeptonThemeModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpAspNetCoreMvcUiLeptonThemeModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpThemingOptions>(options =>
            {
                options.Themes.Add<LeptonTheme>();

                if (options.DefaultThemeName == null)
                {
                    options.DefaultThemeName = LeptonTheme.Name;
                }
            });

            Configure<AbpErrorPageOptions>(options =>
            {
                options.ErrorViewUrls.Add("401", "~/Views/Error/401.cshtml");
                options.ErrorViewUrls.Add("403", "~/Views/Error/403.cshtml");
                options.ErrorViewUrls.Add("404", "~/Views/Error/404.cshtml");
                options.ErrorViewUrls.Add("500", "~/Views/Error/500.cshtml");
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpAspNetCoreMvcUiLeptonThemeModule>();
            });

            Configure<AbpToolbarOptions>(options =>
            {
                options.Contributors.Add(new LeptonThemeMainTopToolbarContributor());
            });

            Configure<AbpBundlingOptions>(options =>
            {
                options
                    .StyleBundles
                    .Add(LeptonThemeBundles.Styles.Global, bundle =>
                    {
                        bundle
                            .AddBaseBundles(StandardBundles.Styles.Global)
                            .AddContributors(typeof(LeptonGlobalStyleContributor));
                    });

                options
                    .ScriptBundles
                    .Add(LeptonThemeBundles.Scripts.Global, bundle =>
                    {
                        bundle
                            .AddBaseBundles(StandardBundles.Scripts.Global)
                            .AddContributors(typeof(LeptonGlobalScriptContributor));
                    });
            });

            Configure<AbpBundleContributorOptions>(options =>
            {
                options.Extensions<JsTreeStyleContributor>()
                    .Add<LeptonJsTreeStyleContributorExtension>();
            });

            context.Services.AddAutoMapperObjectMapper<AbpAspNetCoreMvcUiLeptonThemeModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LeptonThemeAutoMapperProfile>(validate: true);
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpAspNetCoreMvcUiLeptonThemeModule>(context);
        }
    }
}
