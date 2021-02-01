using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(TheProjectHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class TheProjectConsoleApiClientModule : AbpModule
    {
        
    }
}
