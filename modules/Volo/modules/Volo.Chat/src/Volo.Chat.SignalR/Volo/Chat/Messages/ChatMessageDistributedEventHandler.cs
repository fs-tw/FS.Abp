using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EventBus.Distributed;

namespace Volo.Chat.Messages
{
    public class ChatMessageDistributedEventHandler : IDistributedEventHandler<ChatMessageEto>, ITransientDependency
    {
        private readonly IRealTimeChatMessageSender _realTimeChatMessageSender;

        public ChatMessageDistributedEventHandler(IRealTimeChatMessageSender realTimeChatMessageSender)
        {
            _realTimeChatMessageSender = realTimeChatMessageSender;
        }

        public async Task HandleEventAsync(ChatMessageEto eventData)
        {
            await _realTimeChatMessageSender.SendAsync(
                eventData.TargetUserId,
                new ChatMessageRdto
                {
                    SenderUserId = eventData.SenderUserId,
                    SenderUsername = eventData.SenderUserName,
                    SenderName = eventData.SenderName,
                    SenderSurname = eventData.SenderSurname,
                    Text = eventData.Message
                }
            );
        }
    }
}