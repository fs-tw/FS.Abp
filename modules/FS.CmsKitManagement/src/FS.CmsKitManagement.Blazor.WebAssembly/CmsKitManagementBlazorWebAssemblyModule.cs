using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement.Blazor.WebAssembly
{
    [DependsOn(
        typeof(CmsKitManagementBlazorModule),
        typeof(CmsKitManagementHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
        )]
    public class CmsKitManagementBlazorWebAssemblyModule : AbpModule
    {
        
    }
}