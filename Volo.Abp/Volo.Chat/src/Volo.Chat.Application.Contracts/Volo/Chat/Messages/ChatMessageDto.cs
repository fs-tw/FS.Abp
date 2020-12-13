using System;

namespace Volo.Chat.Messages
{
    public class ChatMessageDto
    {
        public string Message { get; set; }

        public DateTime MessageDate { get; set; }

        public bool IsRead { get; set; }

        public DateTime ReadDate { get; set; }

        public ChatMessageSide Side { get; set; }
    }
}