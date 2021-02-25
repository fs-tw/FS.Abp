using Microsoft.Extensions.DependencyInjection;
using FS.Wbm.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.Wbm.Blazor
{
    [DependsOn(
        typeof(WbmHttpApiClientModule),
        typeof(AbpAutoMapperModule)
        )]
    public class WbmBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<WbmBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<WbmBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new WbmMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(WbmBlazorModule).Assembly);
            });
        }
    }
}