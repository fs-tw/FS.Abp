using System;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace Volo.Chat.Messages
{
    [Dependency(TryRegister = true)]
    public class DistributedEventBusRealTimeChatMessageSender : IRealTimeChatMessageSender, ITransientDependency
    {
        protected IDistributedEventBus DistributedEventBus { get; }

        public DistributedEventBusRealTimeChatMessageSender(IDistributedEventBus distributedEventBus)
        {
            DistributedEventBus = distributedEventBus;
        }

        public async Task SendAsync(Guid targetUserId, ChatMessageRdto message)
        {
            await DistributedEventBus.PublishAsync(
                new ChatMessageEto
                {
                    SenderUserId = message.SenderUserId,
                    SenderUserName = message.SenderUsername,
                    SenderName = message.SenderName,
                    SenderSurname = message.SenderSurname,
                    TargetUserId = targetUserId,
                    Message = message.Text
                }
            );
        }
    }
}
