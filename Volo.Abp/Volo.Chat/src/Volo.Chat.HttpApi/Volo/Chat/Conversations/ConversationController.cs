using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Chat.Messages;

namespace Volo.Chat.Conversations
{
    [RemoteService(Name = "Chat")]
    [Area("chat")]
    [Route("api/chat/conversation")]
    public class ConversationController : ChatController, IConversationAppService
    {
        private readonly IConversationAppService _conversationAppService;

        public ConversationController(IConversationAppService conversationAppService)
        {
            _conversationAppService = conversationAppService;
        }

        [HttpPost]
        [Route("send-message")]
        public Task SendMessageAsync(SendMessageInput input)
        {
            return _conversationAppService.SendMessageAsync(input);
        }

        [HttpGet]
        [Route("conversation")]
        public Task<ChatConversationDto> GetConversationAsync(GetConversationInput input)
        {
            return _conversationAppService.GetConversationAsync(input);
        }

        [HttpPost]
        [Route("mark-conversation-as-read")]
        public Task MarkConversationAsReadAsync(MarkConversationAsReadInput input)
        {
            return _conversationAppService.MarkConversationAsReadAsync(input);
        }
    }
}
