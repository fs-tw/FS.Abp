using Volo.Abp.AspNetCore.Components.Server.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.Settings.Blazor.Server
{
    [DependsOn(
        typeof(AbpAspNetCoreComponentsServerThemingModule),
        typeof(SettingsBlazorModule)
        )]
    public class SettingsBlazorServerModule : AbpModule
    {
        
    }
}