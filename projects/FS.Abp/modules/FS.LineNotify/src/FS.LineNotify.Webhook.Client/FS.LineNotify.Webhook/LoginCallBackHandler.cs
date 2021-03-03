using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Collections;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.RabbitMq;

namespace FS.LineNotify.Webhook
{
    public class DefaultLoginCallBackHandler : Volo.Abp.Domain.Services.DomainService, ILoginCallBackHandler
    {
        private FS.LineNotify.Channels.IChannelStore channelStore => this.LazyServiceProvider.LazyGetRequiredService<FS.LineNotify.Channels.IChannelStore>();

        public DefaultLoginCallBackHandler()
        {

        }
        public virtual Task LoginCallBack(LoginCallBackEto eventData)
        {
            this.channelStore.AddOrReplace(eventData.Channel, eventData.AccessToken);
            return Task.CompletedTask;
        }
    }

    public interface ILoginCallBackHandler: ITransientDependency
    {
        Task LoginCallBack(LoginCallBackEto eventData);
    }

    public class LoginCallBackHandler : Volo.Abp.Domain.Services.DomainService, Volo.Abp.EventBus.Distributed.IDistributedEventHandler<LoginCallBackEto>, ITransientDependency
    {
        private LoginCallBackHandlersOptions loginCallBackOptions => this.LazyServiceProvider.LazyGetRequiredService<IOptions<LoginCallBackHandlersOptions>>().Value;
        private AbpRabbitMqEventBusOptions eventBusOptions => this.LazyServiceProvider.LazyGetRequiredService<IOptions<AbpRabbitMqEventBusOptions>>().Value;
        public async Task HandleEventAsync(LoginCallBackEto eventData)
        {
            if (eventBusOptions.ClientName == eventData.ClientName)
            {
                foreach (var type in loginCallBackOptions.LoginCallBackHandlers.ToList())
                {
                    var loginCallBackHandler = this.LazyServiceProvider.LazyGetRequiredService(type) as ILoginCallBackHandler;
                    if (loginCallBackHandler != null)
                    {
                        await loginCallBackHandler.LoginCallBack(eventData);
                    }
                   
                }
            }


        }
    }
}
