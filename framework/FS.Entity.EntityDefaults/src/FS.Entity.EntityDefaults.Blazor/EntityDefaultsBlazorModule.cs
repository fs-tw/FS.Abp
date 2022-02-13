using Microsoft.Extensions.DependencyInjection;
using FS.Entity.EntityDefaults.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.Web.Theming;
using Volo.Abp.AspNetCore.Components.Web.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.Entity.EntityDefaults.Blazor;

[DependsOn(
    typeof(EntityDefaultsApplicationContractsModule),
    typeof(AbpAspNetCoreComponentsWebThemingModule),
    typeof(AbpAutoMapperModule)
    )]
public class EntityDefaultsBlazorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAutoMapperObjectMapper<EntityDefaultsBlazorModule>();

        Configure<AbpAutoMapperOptions>(options =>
        {
            options.AddProfile<EntityDefaultsBlazorAutoMapperProfile>(validate: true);
        });

        Configure<AbpNavigationOptions>(options =>
        {
            options.MenuContributors.Add(new EntityDefaultsMenuContributor());
        });

        Configure<AbpRouterOptions>(options =>
        {
            options.AdditionalAssemblies.Add(typeof(EntityDefaultsBlazorModule).Assembly);
        });
    }
}
