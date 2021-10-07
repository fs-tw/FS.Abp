using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes.Blazor.Server
{
    [DependsOn(
        typeof(AbpAspNetCoreComponentsServerThemingModule),
        typeof(EntityTypesBlazorModule)
        )]
    public class EntityTypesBlazorServerModule : AbpModule
    {
        
    }
}