using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class AbpConsoleApiClientModule : AbpModule
    {
        
    }
}
