using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class CmsKitManagementConsoleApiClientModule : AbpModule
    {
        
    }
}
