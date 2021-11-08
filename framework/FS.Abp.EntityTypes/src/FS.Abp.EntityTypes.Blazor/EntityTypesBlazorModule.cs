using Microsoft.Extensions.DependencyInjection;
using FS.Abp.EntityTypes.Blazor.Menus;
using Volo.Abp.AspNetCore.Components.Web.Theming;
using Volo.Abp.AspNetCore.Components.Web.Theming.Routing;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.EntityTypes.Blazor
{
    [DependsOn(
        typeof(EntityTypesApplicationContractsModule),
        typeof(AbpAspNetCoreComponentsWebThemingModule),
        typeof(AbpAutoMapperModule)
        )]
    public class EntityTypesBlazorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<EntityTypesBlazorModule>();

            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<EntityTypesBlazorAutoMapperProfile>(validate: true);
            });

            Configure<AbpNavigationOptions>(options =>
            {
                options.MenuContributors.Add(new EntityTypesMenuContributor());
            });

            Configure<AbpRouterOptions>(options =>
            {
                options.AdditionalAssemblies.Add(typeof(EntityTypesBlazorModule).Assembly);
            });
        }
    }
}