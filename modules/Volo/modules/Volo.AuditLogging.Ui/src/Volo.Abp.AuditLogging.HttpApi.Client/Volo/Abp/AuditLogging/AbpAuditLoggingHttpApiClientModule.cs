using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Abp.AuditLogging
{
    [DependsOn(
        typeof(AbpAuditLoggingApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class AbpAuditLoggingHttpApiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(typeof(AbpAuditLoggingApplicationContractsModule).Assembly, 
                AuditLoggingRemoteServiceConsts.RemoteServiceName);
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
