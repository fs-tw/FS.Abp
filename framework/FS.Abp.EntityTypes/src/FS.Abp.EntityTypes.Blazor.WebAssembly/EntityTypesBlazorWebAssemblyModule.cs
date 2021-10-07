using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes.Blazor.WebAssembly
{
    [DependsOn(
        typeof(EntityTypesBlazorModule),
        typeof(EntityTypesHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
        )]
    public class EntityTypesBlazorWebAssemblyModule : AbpModule
    {
        
    }
}