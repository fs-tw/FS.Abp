using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.YC.HttpApi.Client.ConsoleTestApp
{
    [DependsOn(
        typeof(YCHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class YCConsoleApiClientModule : AbpModule
    {
        
    }
}
