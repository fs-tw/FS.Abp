using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.LeptonTheme.Management.Blazor.Menus;
using Volo.Abp.LeptonTheme.Management.Blazor.Settings;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.Blazor;
using Volo.Abp.SettingManagement.Blazor;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.LeptonTheme.Management.Blazor
{
    [DependsOn(
        typeof(LeptonThemeManagementHttpApiClientModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpPermissionManagementBlazorModule),
        typeof(AbpSettingManagementBlazorModule)
        )]
    public class LeptonThemeManagementBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<LeptonThemeManagementBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<LeptonThemeManagementBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new LeptonThemeManagementMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(LeptonThemeManagementBlazorModule).Assembly);
            });
            
            Configure<SettingManagementComponentOptions>(options =>
            {
                options.Contributors.Add(new LeptonSettingManagementComponentContributor());
            });
        }
    }
}