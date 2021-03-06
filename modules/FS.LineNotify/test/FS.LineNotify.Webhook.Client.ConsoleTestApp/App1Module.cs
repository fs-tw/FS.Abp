using Volo.Abp.Autofac;
using Volo.Abp.EventBus.RabbitMq;
using Volo.Abp.Modularity;
using Volo.Abp.RabbitMQ;

namespace App1
{
    [DependsOn(typeof(AbpAutofacModule))]
    [DependsOn(typeof(FS.LineNotify.Webhook.Client.LineNotifyWebhookClientModule))]
    [DependsOn(typeof(FS.LineNotify.LineNotifyHttpApiHostSharedModule))]
    public class App1Module : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}