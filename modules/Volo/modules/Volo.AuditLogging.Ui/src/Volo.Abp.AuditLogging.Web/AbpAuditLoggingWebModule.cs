using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Bundling;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Commercial;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Bundling;
using Volo.Abp.AuditLogging.Localization;
using Volo.Abp.AuditLogging.Web.Navigation;
using Volo.Abp.AutoMapper;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.AuditLogging.Web
{
    [DependsOn(
        typeof(AbpAuditLoggingHttpApiModule),
        typeof(AbpAspNetCoreMvcUiThemeCommercialModule),
        typeof(AbpAutoMapperModule))]
    public class AbpAuditLoggingWebModule : AbpModule
    {
         public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(AuditLoggingResource), typeof(AbpAuditLoggingWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpAuditLoggingWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpAuditLoggingWebModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpAuditLoggingWebModuleAutoMapperProfile>(validate: true);
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpAuditLoggingWebModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AuditLoggingResource>()
                    .AddVirtualJson("/Volo/Abp/Identity/Localization/ApplicationContracts");
            });

            Configure<RazorPagesOptions>(options =>
            {
                //options.Conventions.AddPageRoute("/AuditLogs/Index", "AuditLogs/");
                options.Conventions.AddPageRoute("/AuditLogs/Detail", "AuditLogs/Detail/{id}");
            });

            Configure<RazorPagesOptions>(options =>
            {
                options.Conventions.AuthorizePage("/AuditLogs/", AbpAuditLoggingPermissions.AuditLogs.Default);
                options.Conventions.AuthorizePage("/AuditLogs/Index", AbpAuditLoggingPermissions.AuditLogs.Default);
                options.Conventions.AuthorizePage("/AuditLogs/Detail", AbpAuditLoggingPermissions.AuditLogs.Default);
                options.Conventions.AuthorizePage("/AuditLogs/EntityChangeDetail", AbpAuditLoggingPermissions.AuditLogs.Default);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AbpAuditLoggingMainMenuContributor());
            });

            Configure<AbpBundlingOptions>(options =>
            {
                options.ScriptBundles.Configure(
                    StandardBundles.Scripts.Global,
                    configuration =>
                    {
                        configuration.AddFiles("/Pages/AuditLogs/audit-log-global.js");
                    }
                );
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<AbpAuditLoggingWebModule>(context);
        }
    }
}
