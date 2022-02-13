using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Entity.MultiLinguals.Blazor.WebAssembly;

[DependsOn(
    typeof(MultiLingualsBlazorModule),
    typeof(MultiLingualsHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class MultiLingualsBlazorWebAssemblyModule : AbpModule
{

}
