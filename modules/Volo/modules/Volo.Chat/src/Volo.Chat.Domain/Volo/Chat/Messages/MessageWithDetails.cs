using Volo.Chat.Users;

namespace Volo.Chat.Messages
{
    public class MessageWithDetails
    {
        public UserMessage UserMessage { get; set; }

        public Message Message { get; set; }

        public ChatUser TargetUser { get; set; }
    }
}