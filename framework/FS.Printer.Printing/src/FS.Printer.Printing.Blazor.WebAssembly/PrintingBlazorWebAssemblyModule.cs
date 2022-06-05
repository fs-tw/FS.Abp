using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Printer.Printing.Blazor.WebAssembly;

[DependsOn(
    typeof(PrintingBlazorModule),
    typeof(PrintingHttpApiClientModule),
    typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
    )]
public class PrintingBlazorWebAssemblyModule : AbpModule
{

}
