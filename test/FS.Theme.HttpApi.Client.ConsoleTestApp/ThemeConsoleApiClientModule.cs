using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Theme
{
    [DependsOn(
        typeof(ThemeHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ThemeConsoleApiClientModule : AbpModule
    {
        
    }
}
