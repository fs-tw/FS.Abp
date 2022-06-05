using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Printer.Printing.Blazor.Server;

[DependsOn(
    typeof(AbpAspNetCoreComponentsServerThemingModule),
    typeof(PrintingBlazorModule)
    )]
public class PrintingBlazorServerModule : AbpModule
{

}
