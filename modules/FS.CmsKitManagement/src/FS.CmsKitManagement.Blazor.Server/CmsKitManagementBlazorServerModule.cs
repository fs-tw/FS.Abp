using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement.Blazor.Server
{
    [DependsOn(
        typeof(AbpAspNetCoreComponentsServerThemingModule),
        typeof(CmsKitManagementBlazorModule)
        )]
    public class CmsKitManagementBlazorServerModule : AbpModule
    {
        
    }
}