using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Coding.Codes.Blazor.Server;

[DependsOn(
    typeof(AbpAspNetCoreComponentsServerThemingModule),
    typeof(CodesBlazorModule)
    )]
public class CodesBlazorServerModule : AbpModule
{

}
