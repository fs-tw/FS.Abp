using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class CoreConsoleApiClientModule : AbpModule
    {
        
    }
}
