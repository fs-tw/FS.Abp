using FS.LineNotify.Webhook;
using System;
using System.Linq;
using Volo.Abp.Collections;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.LineNotify.Webhook.Client
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(LineNotifyDomainModule)
    )]
    [DependsOn(typeof(Volo.Abp.EventBus.RabbitMq.AbpEventBusRabbitMqModule))]
    public class LineNotifyWebhookClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {

            Configure<LoginCallBackHandlersOptions>(o =>
            {
                o.LoginCallBackHandlers.Add(typeof(DefaultLoginCallBackHandler));
                var type = typeof(ILoginCallBackHandler);
                AppDomain.CurrentDomain.GetAssemblies()
                    .Where(a => a != typeof(LineNotifyWebhookClientModule).Assembly)
                    .SelectMany(s => s.GetTypes())
                    .Where(p => type.IsAssignableFrom(p) && !p.IsInterface)
                    .ToList()
                    .ForEach(t =>
                    {
                        o.LoginCallBackHandlers.Add(t);
                    });
            });
        }
    }
}
