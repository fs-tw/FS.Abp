using Microsoft.Extensions.DependencyInjection;
using FS.Abp.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Abp.Identity.Pro.Blazor;
using Volo.Abp.AuditLogging.Blazor;
using Volo.Abp.LanguageManagement.Blazor;
using Volo.Saas.Host.Blazor;
using Volo.Abp.TextTemplateManagement.Blazor;

namespace FS.Abp.Blazor
{
    [DependsOn(
        typeof(AbpHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule),
        typeof(AbpAutoMapperModule)
        )]
    [DependsOn(typeof(AbpIdentityProBlazorModule ))]
    [DependsOn(typeof(AbpAuditLoggingBlazorModule))]
    [DependsOn(typeof(LanguageManagementBlazorModule))]
    [DependsOn(typeof(SaasHostBlazorModule))]
    [DependsOn(typeof(TextTemplateManagementBlazorModule))]
    public class AbpBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AbpMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(AbpBlazorModule).Assembly);
            });
        }
    }
}