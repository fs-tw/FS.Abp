using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class PrinterManagementConsoleApiClientModule : AbpModule
    {
        
    }
}
