using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Chat.Conversations
{
    public class GetConversationInput : PagedResultRequestDto
    {
        public Guid TargetUserId { get; set; }
    }
}