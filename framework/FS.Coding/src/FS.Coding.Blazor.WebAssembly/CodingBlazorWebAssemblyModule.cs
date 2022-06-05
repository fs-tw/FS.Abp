using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Coding.Blazor.WebAssembly;

[DependsOn(
    typeof(CodingBlazorModule),
    typeof(CodingHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class CodingBlazorWebAssemblyModule : AbpModule
{

}
