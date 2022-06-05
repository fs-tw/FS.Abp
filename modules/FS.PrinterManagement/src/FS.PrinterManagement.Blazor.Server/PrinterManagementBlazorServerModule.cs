using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement.Blazor.Server
{
    [DependsOn(
        typeof(AbpAspNetCoreComponentsServerThemingModule),
        typeof(PrinterManagementBlazorModule)
        )]
    public class PrinterManagementBlazorServerModule : AbpModule
    {
        
    }
}