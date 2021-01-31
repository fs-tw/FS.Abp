using Microsoft.Extensions.DependencyInjection;
using FS.LineNotify.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.LineNotify.Blazor
{
    [DependsOn(
        typeof(LineNotifyHttpApiClientModule),
        typeof(AbpAutoMapperModule)
        )]
    public class LineNotifyBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<LineNotifyBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LineNotifyBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new LineNotifyMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(LineNotifyBlazorModule).Assembly);
            });
        }
    }
}