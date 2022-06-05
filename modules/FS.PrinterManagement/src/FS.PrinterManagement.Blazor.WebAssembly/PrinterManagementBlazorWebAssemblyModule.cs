using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement.Blazor.WebAssembly
{
    [DependsOn(
        typeof(PrinterManagementBlazorModule),
        typeof(PrinterManagementHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
        )]
    public class PrinterManagementBlazorWebAssemblyModule : AbpModule
    {
        
    }
}