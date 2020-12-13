using Volo.Chat.Users;

namespace Volo.Chat.Conversations
{
    public class ConversationWithTargetUser
    {
        public Conversation Conversation { get; set; }

        public ChatUser TargetUser { get; set; }
    }
}
