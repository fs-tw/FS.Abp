using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Coding.Codes.Blazor.WebAssembly;

[DependsOn(
    typeof(CodesBlazorModule),
    typeof(CodesHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class CodesBlazorWebAssemblyModule : AbpModule
{

}
