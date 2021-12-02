using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(MetadataApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class MetadataHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Metadata";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(MetadataApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
