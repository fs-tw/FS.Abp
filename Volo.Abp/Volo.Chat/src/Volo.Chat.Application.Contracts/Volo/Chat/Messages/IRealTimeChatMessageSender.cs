using System;
using System.Threading.Tasks;

namespace Volo.Chat.Messages
{
    public interface IRealTimeChatMessageSender
    {
        Task SendAsync(Guid targetUserId, ChatMessageRdto message);
    }
}
