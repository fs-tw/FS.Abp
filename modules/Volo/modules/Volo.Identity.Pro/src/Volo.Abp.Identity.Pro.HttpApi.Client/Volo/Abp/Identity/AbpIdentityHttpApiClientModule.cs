using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Abp.Identity
{
    [DependsOn(
        typeof(AbpIdentityApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class AbpIdentityHttpApiClientModule : AbpModule
    {
        public static readonly string Development = nameof(Development);

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(typeof(AbpIdentityApplicationContractsModule).Assembly, 
                IdentityProRemoteServiceConsts.RemoteServiceName);
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}