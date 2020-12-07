using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using FS.Abp.Localization;
using FS.Abp.Web.Menus;
using Volo.Abp.AspNetCore.Mvc.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.VirtualFileSystem;
using FS.Abp.Permissions;
using Volo.Abp.Identity.Web;
using Volo.Abp.AuditLogging.Web;
using Volo.Abp.IdentityServer.Web;
using Volo.Abp.LanguageManagement;
using Volo.Saas.Host;
using Volo.Saas.Tenant;
using Volo.Abp.TextTemplateManagement.Web;

namespace FS.Abp.Web
{
    [DependsOn(
        typeof(AbpHttpApiModule),
        typeof(AbpAspNetCoreMvcUiThemeSharedModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(AbpIdentityWebModule))]
    [DependsOn(typeof(AbpAuditLoggingWebModule))]
    [DependsOn(typeof(AbpIdentityServerWebModule))]
    [DependsOn(typeof(LanguageManagementWebModule))]
    [DependsOn(typeof(SaasHostWebModule))]
    [DependsOn(typeof(SaasTenantWebModule))]
    [DependsOn(typeof(TextTemplateManagementWebModule))]
    public class AbpWebModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.PreConfigure<AbpMvcDataAnnotationsLocalizationOptions>(options =>
            {
                options.AddAssemblyResource(typeof(AbpResource), typeof(AbpWebModule).Assembly);
            });

            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AbpWebModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AbpMenuContributor());
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpWebModule>();
            });

            context.Services.AddAutoMapperObjectMapper<AbpWebModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<AbpWebModule>(validate: true);
            });

            Configure<RazorPagesOptions>(options =>
            {
                //Configure authorization.
            });
        }
    }
}
