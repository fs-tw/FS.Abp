using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AuditLoggingApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class AuditLoggingHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "AuditLogging";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(AuditLoggingApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
