using System.Collections.Generic;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.Conversations
{
    public class ChatConversationDto
    {
        public List<ChatMessageDto> Messages { get; set; }

        public ChatTargetUserInfo TargetUserInfo { get; set; }
    }
}