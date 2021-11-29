using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging.Blazor.WebAssembly
{
    [DependsOn(
        typeof(AuditLoggingBlazorModule),
        typeof(AuditLoggingHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
        )]
    public class AuditLoggingBlazorWebAssemblyModule : AbpModule
    {
        
    }
}