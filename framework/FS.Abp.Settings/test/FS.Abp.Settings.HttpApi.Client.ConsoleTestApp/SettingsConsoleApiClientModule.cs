using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.Settings
{
    [DependsOn(
        typeof(SettingsHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class SettingsConsoleApiClientModule : AbpModule
    {
        
    }
}
