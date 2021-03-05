using Microsoft.Extensions.DependencyInjection;
using FS.Abp.File.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.File.Blazor
{
    [DependsOn(
        typeof(FileHttpApiClientModule),
        typeof(AbpAutoMapperModule)
        )]
    public class FileBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<FileBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<FileBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new FileMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(FileBlazorModule).Assembly);
            });
        }
    }
}