using System;
using System.ComponentModel.DataAnnotations;

namespace Volo.Chat.Messages
{
    public class SendMessageInput
    {
        public Guid TargetUserId { get; set; }

        [Required]
        [StringLength(ChatMessageConsts.MaxTextLength, MinimumLength = 1)]
        public string Message { get; set; }
    }
}