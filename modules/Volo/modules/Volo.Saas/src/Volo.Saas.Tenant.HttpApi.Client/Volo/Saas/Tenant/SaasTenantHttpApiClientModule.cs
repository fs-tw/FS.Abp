using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Saas.Tenant
{
    [DependsOn(
        typeof(SaasTenantApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class SaasTenantHttpApiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(SaasTenantApplicationContractsModule).Assembly,
                SaasTenantRemoteServiceConsts.RemoteServiceName
            );
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
