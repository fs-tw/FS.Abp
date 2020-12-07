using System;

namespace Volo.Chat.Messages
{
    public class ChatMessageRdto //RDTO: Realtime Data Transfer Object :)
    {
        public Guid SenderUserId { get; set; }
        public string SenderUsername { get; set; }
        public string SenderName { get; set; }
        public string SenderSurname { get; set; }
        public string Text { get; set; }
    }
}
