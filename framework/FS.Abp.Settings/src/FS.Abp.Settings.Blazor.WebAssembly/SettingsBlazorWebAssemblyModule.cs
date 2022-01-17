using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.Modularity;

namespace FS.Abp.Settings.Blazor.WebAssembly
{
    [DependsOn(
        typeof(SettingsBlazorModule),
        typeof(SettingsHttpApiClientModule),
        typeof(AbpAspNetCoreComponentsWebAssemblyThemingModule)
        )]
    public class SettingsBlazorWebAssemblyModule : AbpModule
    {
        
    }
}