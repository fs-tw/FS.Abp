using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.File
{
    [DependsOn(
        typeof(FileHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class FileConsoleApiClientModule : AbpModule
    {
        
    }
}
