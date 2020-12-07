using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Abp.Account
{
    [DependsOn(
        typeof(AbpAccountAdminApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class AbpAccountAdminHttpApiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(typeof(AbpAccountAdminApplicationContractsModule).Assembly, 
                AccountProAdminRemoteServiceConsts.RemoteServiceName);
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
