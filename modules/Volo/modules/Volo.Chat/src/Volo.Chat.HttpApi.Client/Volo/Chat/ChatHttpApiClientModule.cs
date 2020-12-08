using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Chat
{
    [DependsOn(
        typeof(ChatApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class ChatHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Chat";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(ChatApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
