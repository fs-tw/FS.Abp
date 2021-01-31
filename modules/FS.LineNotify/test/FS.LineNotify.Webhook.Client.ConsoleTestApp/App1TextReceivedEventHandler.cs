using System;
using System.Threading.Tasks;
using FS.LineNotify;
using FS.LineNotify.Webhook;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace App1
{
    public class App1LoginCallBackHandler : Volo.Abp.Domain.Services.DomainService, ILoginCallBackHandler
    {
        private FS.LineNotify.ILineNotifyGateway lineNotifyGateway => this.LazyServiceProvider.LazyGetRequiredService<FS.LineNotify.ILineNotifyGateway>();

        public Task LoginCallBack(LoginCallBackEto eventData)
        {
            Console.WriteLine("--------> App2 has received the message: " + eventData.AccessToken);
            lineNotifyGateway.NotifyAsync("further rec.", "abc");

            return Task.CompletedTask;
        }
    }
}
