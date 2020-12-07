using Volo.Abp.AspNetCore.SignalR;
using Volo.Abp.EventBus;
using Volo.Abp.Modularity;

namespace Volo.Chat
{
    [DependsOn(
        typeof(ChatApplicationContractsModule),
        typeof(AbpAspNetCoreSignalRModule),
        typeof(AbpEventBusModule)
        )]
    public class ChatSignalRModule : AbpModule
    {

    }
}
