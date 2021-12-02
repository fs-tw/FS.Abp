using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.Metadata.Blazor.Server
{
    [DependsOn(
        typeof(AbpAspNetCoreComponentsServerThemingModule),
        typeof(MetadataBlazorModule)
        )]
    public class MetadataBlazorServerModule : AbpModule
    {
        
    }
}