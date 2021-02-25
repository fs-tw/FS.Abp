using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Wbm
{
    [DependsOn(
        typeof(WbmApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class WbmHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Wbm";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(WbmApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
