using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.Metadata.Blazor.WebAssembly
{
    [DependsOn(
        typeof(MetadataBlazorModule),
        typeof(MetadataHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
        )]
    public class MetadataBlazorWebAssemblyModule : AbpModule
    {
        
    }
}