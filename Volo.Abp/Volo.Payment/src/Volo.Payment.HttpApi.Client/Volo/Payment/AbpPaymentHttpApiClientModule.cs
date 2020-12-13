using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Payment
{
    [DependsOn(
        typeof(AbpPaymentApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class AbpPaymentHttpApiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(AbpPaymentApplicationContractsModule).Assembly,
                PaymentRemoteServiceConsts.RemoteServiceName
            );
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
