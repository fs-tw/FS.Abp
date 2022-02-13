using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityDefaults.Blazor.Server;

[DependsOn(
    typeof(AbpAspNetCoreComponentsServerThemingModule),
    typeof(EntityDefaultsBlazorModule)
    )]
public class EntityDefaultsBlazorServerModule : AbpModule
{

}
