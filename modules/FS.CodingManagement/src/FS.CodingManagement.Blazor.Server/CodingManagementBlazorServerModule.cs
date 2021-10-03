using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.CodingManagement.Blazor.Server
{
    [DependsOn(
        typeof(AbpAspNetCoreComponentsServerThemingModule),
        typeof(CodingManagementBlazorModule)
        )]
    public class CodingManagementBlazorServerModule : AbpModule
    {
        
    }
}