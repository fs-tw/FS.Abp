using Microsoft.Extensions.DependencyInjection;
using FS.Abp.Authentication.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Authentication.Blazor
{
    [DependsOn(
        typeof(AuthenticationHttpApiClientModule),
        typeof(AbpAutoMapperModule)
        )]
    public class AuthenticationBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AuthenticationBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AuthenticationBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AuthenticationMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(AuthenticationBlazorModule).Assembly);
            });
        }
    }
}