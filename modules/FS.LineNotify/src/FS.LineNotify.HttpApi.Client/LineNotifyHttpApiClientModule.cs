using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.LineNotify
{
    [DependsOn(
        typeof(LineNotifyApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class LineNotifyHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "LineNotify";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(LineNotifyApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
