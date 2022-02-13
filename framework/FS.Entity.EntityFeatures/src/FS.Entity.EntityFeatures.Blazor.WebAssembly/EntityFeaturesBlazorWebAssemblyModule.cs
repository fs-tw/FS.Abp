using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityFeatures.Blazor.WebAssembly;

[DependsOn(
    typeof(EntityFeaturesBlazorModule),
    typeof(EntityFeaturesHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class EntityFeaturesBlazorWebAssemblyModule : AbpModule
{

}
