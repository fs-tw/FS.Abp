using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.CodingManagement.Blazor.WebAssembly
{
    [DependsOn(
        typeof(CodingManagementBlazorModule),
        typeof(CodingManagementHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
        )]
    public class CodingManagementBlazorWebAssemblyModule : AbpModule
    {
        
    }
}