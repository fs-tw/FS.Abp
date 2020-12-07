using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account.Pro.Admin.Blazor.Settings;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.SettingManagement.Blazor;

namespace Volo.Abp.Account.Pro.Admin.Blazor
{
    [DependsOn(
        typeof(AbpAccountAdminHttpApiClientModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpSettingManagementBlazorModule)
        )]
    public class AbpAccountAdminBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<AbpAccountAdminBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<AbpAccountAdminBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(AbpAccountAdminBlazorModule).Assembly);
            });
            
            Configure<SettingManagementComponentOptions>(options =>
            {
                options.Contributors.Add(new AbpAccountAdminSettingManagementComponentContributor());
            });
        }
    }
}