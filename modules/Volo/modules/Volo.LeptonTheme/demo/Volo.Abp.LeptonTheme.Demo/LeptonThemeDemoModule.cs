using System.IO;
using Localization.Resources.AbpUi;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Demo;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;
using Volo.Abp.Autofac;
using Volo.Abp.LeptonTheme.Demo.Bundling;
using Volo.Abp.LeptonTheme.Demo.Data;
using Volo.Abp.LeptonTheme.Demo.Localization.Resource;
using Volo.Abp.LeptonTheme.Demo.Navigation;
using Volo.Abp.LeptonTheme.Demo.Toolbars;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.Settings;
using Volo.Abp.UI.Navigation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.LeptonTheme.Demo
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AbpAspNetCoreMvcUiLeptonThemeModule),
        typeof(AbpAspNetCoreMvcUiThemeSharedDemoModule)
        )]
    public class LeptonThemeDemoModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var hostingEnvironment = context.Services.GetHostingEnvironment();
            var configuration = context.Services.GetConfiguration();

            Configure<AbpSettingOptions>(options =>
            {
                options.ValueProviders.Add<LeptonDemoSettingValueProvider>();
            });

            ConfigureVirtualFileSystem(hostingEnvironment);
            ConfigureBundling();
            ConfigureLocalization();
            ConfigureMenus();
            ConfigureToolbars();
            Configure<AbpBundlingOptions>(options =>
            {
                options.StyleBundles.Add(LeptonDemoBundles.Styles.SiteLayout,
                    bundleConfiguration =>
                    {
                        bundleConfiguration.BaseBundles.Add(StandardBundles.Styles.Global);
                        bundleConfiguration.AddContributors(typeof(LeptonDemoStyleBundleContributor));
                    }
                );

                options.ScriptBundles.Add(LeptonDemoBundles.Scripts.SiteLayout,
                    bundleConfiguration =>
                    {
                        bundleConfiguration.BaseBundles.Add(StandardBundles.Scripts.Global);
                        bundleConfiguration.AddContributors(typeof(LeptonDemoScriptBundleContributor));
                    }
                );

                //options.Mode = BundlingMode.BundleAndMinify;
            });

            Configure<LeptonThemeOptions>(options =>
            {
                options.EnableDemoFeatures = true;
            });
        }

        private void ConfigureToolbars()
        {
            Configure<AbpToolbarOptions>(options =>
            {
                options.Contributors.Insert(0, new HeaderToolbarContributor());
            });
        }

        private void ConfigureMenus()
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new DemoMenuContributor());
            });
        }

        private void ConfigureLocalization()
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<DemoResource>("en")
                    .AddBaseTypes(
                        typeof(AbpValidationResource),
                        typeof(AbpUiResource)
                    )
                    .AddVirtualJson("/Localization/Resource");

                options.Languages.Add(new LanguageInfo("en", "en", "English", flagIcon: "gb-eng"));
                options.Languages.Add(new LanguageInfo("tr", "tr", "Türkçe"));
                options.Languages.Add(new LanguageInfo("de", "de", "German"));
                options.Languages.Add(new LanguageInfo("gr", "gr", "Greek"));
                options.Languages.Add(new LanguageInfo("it", "it", "Italian")); 
                options.Languages.Add(new LanguageInfo("jp", "jp", "Japanese")); 
            });
        }

        private void ConfigureBundling()
        {
            //TODO: Add Google Analytics
            //services.Configure<BundlingOptions>(options =>
            //{
            //    options.ScriptBundles
            //        .Get(StandardBundles.Scripts.Global)
            //        .AddFiles("/Pages/Layout/google-analytics.js");
            //});
        }

        private void ConfigureVirtualFileSystem(IWebHostEnvironment hostingEnvironment)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<LeptonThemeDemoModule>();
            });

            if (hostingEnvironment.IsDevelopment())
            {
                Configure<AbpVirtualFileSystemOptions>(options =>
                {
                    options.FileSets.ReplaceEmbeddedByPhysical<LeptonThemeDemoModule>(hostingEnvironment.ContentRootPath);
                    options.FileSets.ReplaceEmbeddedByPhysical<AbpAspNetCoreMvcUiLeptonThemeModule>(Path.Combine(hostingEnvironment.ContentRootPath, string.Format("..{0}..{0}src{0}Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton", Path.DirectorySeparatorChar)));
                });
            }
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();
            var env = context.GetEnvironment();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseErrorPage();
            }

            //Necessary for LetsEncrypt
            //app.UseStaticFiles(new StaticFileOptions
            //{
            //    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @".well-known")),
            //    RequestPath = new PathString("/.well-known"),
            //    ServeUnknownFileTypes = true // serve extensionless file
            //});

            app.UseVirtualFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseAbpRequestLocalization();
            app.UseConfiguredEndpoints();
        }
    }
}
