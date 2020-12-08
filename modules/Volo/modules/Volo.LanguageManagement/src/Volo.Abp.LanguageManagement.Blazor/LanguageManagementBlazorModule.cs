using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.LanguageManagement;
using Volo.Abp.LanguageManagement.Blazor.Menus;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.LanguageManagement.Blazor
{
    [DependsOn(
         typeof(LanguageManagementHttpApiClientModule),
         typeof(AbpAutoMapperModule),
         typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
         )]
    public class LanguageManagementBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<LanguageManagementBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LanguageManagementBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new LanguageManagementMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(LanguageManagementBlazorModule).Assembly);
            });
        }
    }
}
