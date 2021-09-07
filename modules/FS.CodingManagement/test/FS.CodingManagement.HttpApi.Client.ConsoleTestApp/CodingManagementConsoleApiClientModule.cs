using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class CodingManagementConsoleApiClientModule : AbpModule
    {
        
    }
}
