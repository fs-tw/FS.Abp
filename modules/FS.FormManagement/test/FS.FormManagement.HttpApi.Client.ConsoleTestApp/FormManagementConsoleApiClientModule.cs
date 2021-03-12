using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.FormManagement
{
    [DependsOn(
        typeof(FormManagementHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class FormManagementConsoleApiClientModule : AbpModule
    {
        
    }
}
