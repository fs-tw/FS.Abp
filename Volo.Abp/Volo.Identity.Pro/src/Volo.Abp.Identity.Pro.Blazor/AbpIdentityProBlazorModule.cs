using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.BlazoriseUI;
using Volo.Abp.Identity.Pro.Blazor.Navigation;
using Volo.Abp.Identity.Pro.Blazor.Settings;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.Blazor;
using Volo.Abp.SettingManagement.Blazor;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.Identity.Pro.Blazor
{
    [DependsOn(
        typeof(AbpIdentityHttpApiClientModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpPermissionManagementBlazorModule),
        typeof(AbpSettingManagementBlazorModule),
        typeof(AbpBlazoriseUIModule)
        )]
    public class AbpIdentityProBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpIdentityProBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpIdentityProBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new AbpIdentityProWebMainMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(AbpIdentityProBlazorModule).Assembly);
            });
            
            Configure<SettingManagementComponentOptions>(options =>
            {
                options.Contributors.Add(new IdentitySettingManagementComponentContributor());
            });
        }
    }
}
