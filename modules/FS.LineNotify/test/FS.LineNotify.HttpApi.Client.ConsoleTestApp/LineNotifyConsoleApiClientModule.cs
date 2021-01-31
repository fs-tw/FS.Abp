using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.LineNotify
{
    [DependsOn(
        typeof(LineNotifyHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    [DependsOn(typeof(FS.LineNotify.LineNotifyWebhookClientModule))]
    [DependsOn(typeof(Volo.Abp.EventBus.RabbitMq.AbpEventBusRabbitMqModule))]
    public class LineNotifyConsoleApiClientModule : AbpModule
    {
        
    }
}
