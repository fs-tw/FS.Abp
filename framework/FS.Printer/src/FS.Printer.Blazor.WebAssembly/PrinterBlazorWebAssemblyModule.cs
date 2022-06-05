using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Printer.Blazor.WebAssembly;

[DependsOn(
    typeof(PrinterBlazorModule),
    typeof(PrinterHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class PrinterBlazorWebAssemblyModule : AbpModule
{

}
