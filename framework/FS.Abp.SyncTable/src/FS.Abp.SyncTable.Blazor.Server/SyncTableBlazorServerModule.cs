using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.SyncTable.Blazor.Server;

[DependsOn(
    typeof(AbpAspNetCoreComponentsServerThemingModule),
    typeof(SyncTableBlazorModule)
    )]
public class SyncTableBlazorServerModule : AbpModule
{

}
