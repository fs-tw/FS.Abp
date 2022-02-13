using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Entity.MultiLinguals.Blazor.Server;

[DependsOn(
    typeof(AbpAspNetCoreComponentsServerThemingModule),
    typeof(MultiLingualsBlazorModule)
    )]
public class MultiLingualsBlazorServerModule : AbpModule
{

}
