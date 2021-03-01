using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(AuthenticationHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class AuthenticationConsoleApiClientModule : AbpModule
    {
        
    }
}
