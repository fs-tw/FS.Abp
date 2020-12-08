using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.SettingManagement.Blazor;
using Volo.Abp.UI.Navigation;
using Volo.FileManagement.Blazor.Navigation;

namespace Volo.FileManagement.Blazor
{
    [DependsOn(
        typeof(FileManagementHttpApiClientModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpSettingManagementBlazorModule)
        )]
    public class FileManagementBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<FileManagementBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<FileManagementBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new FileManagementMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(FileManagementBlazorModule).Assembly);
            });

        }
    }
}
