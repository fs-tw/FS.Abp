using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.SyncTable.Blazor.WebAssembly;

[DependsOn(
    typeof(SyncTableBlazorModule),
    typeof(SyncTableHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class SyncTableBlazorWebAssemblyModule : AbpModule
{

}
