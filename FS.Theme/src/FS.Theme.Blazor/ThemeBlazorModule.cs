using Microsoft.Extensions.DependencyInjection;
using FS.Theme.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.Theme.Blazor
{
    [DependsOn(
        typeof(ThemeHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule),
        typeof(AbpAutoMapperModule)
        )]
    public class ThemeBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<ThemeBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<ThemeBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new ThemeMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(ThemeBlazorModule).Assembly);
            });
        }
    }
}