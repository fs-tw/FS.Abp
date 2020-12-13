using System;

namespace Volo.Chat.Messages
{
    public class ChatMessageEto
    {
        public Guid TargetUserId { get; set; }
        public string SenderUserName { get; set; }
        public string SenderName { get; set; }
        public string SenderSurname { get; set; }
        public Guid SenderUserId { get; set; }
        public string Message { get; set; }
    }
}