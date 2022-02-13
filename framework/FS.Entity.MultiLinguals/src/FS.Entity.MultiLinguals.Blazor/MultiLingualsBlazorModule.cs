using Microsoft.Extensions.DependencyInjection;
using FS.Entity.MultiLinguals.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.Web.Theming;
using Volo.Abp.AspNetCore.Components.Web.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.Entity.MultiLinguals.Blazor;

[DependsOn(
    typeof(MultiLingualsApplicationContractsModule),
    typeof(AbpAspNetCoreComponentsWebThemingModule),
    typeof(AbpAutoMapperModule)
    )]
public class MultiLingualsBlazorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<MultiLingualsBlazorModule>();

        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddProfile<MultiLingualsBlazorAutoMapperProfile>(validate: true);
        });

        Configure<AbpNavigationOptions>(options =>
        {
            options.MenuContributors.Add(new MultiLingualsMenuContributor());
        });

        Configure<AbpRouterOptions>(options =>
        {
            options.AdditionalAssemblies.Add(typeof(MultiLingualsBlazorModule).Assembly);
        });
    }
}
