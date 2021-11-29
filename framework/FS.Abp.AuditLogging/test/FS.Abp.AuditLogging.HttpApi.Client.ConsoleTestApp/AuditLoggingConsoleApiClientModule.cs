using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AuditLoggingHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class AuditLoggingConsoleApiClientModule : AbpModule
    {
        
    }
}
