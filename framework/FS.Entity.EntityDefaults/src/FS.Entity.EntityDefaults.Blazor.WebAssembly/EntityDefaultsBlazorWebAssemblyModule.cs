using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityDefaults.Blazor.WebAssembly;

[DependsOn(
    typeof(EntityDefaultsBlazorModule),
    typeof(EntityDefaultsHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class EntityDefaultsBlazorWebAssemblyModule : AbpModule
{

}
