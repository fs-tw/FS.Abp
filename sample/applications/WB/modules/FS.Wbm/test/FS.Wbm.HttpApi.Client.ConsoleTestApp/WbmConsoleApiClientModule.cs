using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Wbm
{
    [DependsOn(
        typeof(WbmHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class WbmConsoleApiClientModule : AbpModule
    {
        
    }
}
