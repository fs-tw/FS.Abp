using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class AbpHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Abp";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(AbpApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
