using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;

namespace Volo.Chat.Users
{
    [RemoteService(Name = "Chat")]
    [Area("chat")]
    [Route("api/chat/contact")]
    public class ContactController : ChatController, IContactAppService
    {
        private readonly IContactAppService _contactAppService;

        public ContactController(IContactAppService contactAppService)
        {
            _contactAppService = contactAppService;
        }

        [HttpGet]
        [Route("contacts")]
        public Task<List<ChatContactDto>> GetContactsAsync(GetContactsInput input)
        {
            return _contactAppService.GetContactsAsync(input);
        }

        [HttpGet]
        [Route("total-unread-message-count")]
        public Task<int> GetTotalUnreadMessageCountAsync()
        {
            return _contactAppService.GetTotalUnreadMessageCountAsync();
        }
    }
}
