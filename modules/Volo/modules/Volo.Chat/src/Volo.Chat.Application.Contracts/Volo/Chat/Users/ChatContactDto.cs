using System;
using Volo.Chat.Messages;

namespace Volo.Chat.Users
{
    public class ChatContactDto
    {
        public Guid UserId { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }

        public string Username { get; set; }

        public ChatMessageSide LastMessageSide { get; set; }

        public string LastMessage { get; set; }

        public DateTime? LastMessageDate { get; set; }

        public int UnreadMessageCount { get; set; }
    }
}