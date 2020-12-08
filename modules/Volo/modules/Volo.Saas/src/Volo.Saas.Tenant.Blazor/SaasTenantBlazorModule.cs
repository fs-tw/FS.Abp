using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.FeatureManagement.Blazor;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;
using Volo.Saas.Host;
using Volo.Saas.Tenant.Blazor.Navigation;

namespace Volo.Saas.Tenant.Blazor
{
    [DependsOn(
        typeof(SaasHostHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpFeatureManagementBlazorModule)
        )]
    public class SaasTenantBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<SaasTenantBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<SaasTenantBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new SaasTenantMainMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(SaasTenantBlazorModule).Assembly);
            });
        }
    }
}
