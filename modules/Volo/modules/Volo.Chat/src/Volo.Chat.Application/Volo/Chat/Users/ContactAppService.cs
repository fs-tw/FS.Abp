using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Features;
using Volo.Abp.Users;
using Volo.Chat.Authorization;
using Volo.Chat.Conversations;

namespace Volo.Chat.Users
{
    [RequiresFeature(ChatFeatures.Enable)]
    [Authorize(ChatPermissions.Messaging)]
    public class ContactAppService : ChatAppService, IContactAppService
    {
        private readonly IChatUserLookupService _chatUserLookupService;
        private readonly IConversationRepository _conversationRepository;

        public ContactAppService(
            IChatUserLookupService chatUserLookupService,
            IConversationRepository conversationRepository)
        {
            _chatUserLookupService = chatUserLookupService;
            _conversationRepository = conversationRepository;
        }

        public async Task<List<ChatContactDto>> GetContactsAsync(GetContactsInput input)
        {
            var conversationContacts = (await _conversationRepository.GetListByUserIdAsync(CurrentUser.GetId(), input.Filter))
                .Select(x => new ChatContactDto
                {
                    UserId = x.TargetUser.Id,
                    Name = x.TargetUser?.Name,
                    Surname = x.TargetUser?.Surname,
                    Username = x.TargetUser?.UserName,
                    LastMessageSide = x.Conversation.LastMessageSide,
                    LastMessage = x.Conversation.LastMessage,
                    LastMessageDate = x.Conversation.LastMessageDate,
                    UnreadMessageCount = x.Conversation.UnreadMessageCount
                }).ToList();

            if (input.IncludeOtherContacts)
            {
                var lookupUsers = await _chatUserLookupService.SearchAsync(
                    nameof(ChatUser.UserName),
                    input.Filter,
                    maxResultCount: ChatConsts.OtherContactLimitPerRequest);

                var lookupContacts = lookupUsers
                    .Where(x => !(conversationContacts.Any(c => c.Username == x.UserName) || x.Id == CurrentUser.GetId()))
                    .Select(x => new ChatContactDto
                    {
                        UserId = x.Id,
                        Name = x.Name,
                        Surname = x.Surname,
                        Username = x.UserName
                    });

                conversationContacts.AddRange(lookupContacts);
            }

            return conversationContacts;
        }

        public async Task<int> GetTotalUnreadMessageCountAsync()
        {
            return await _conversationRepository.GetTotalUnreadMessageCountAsync(CurrentUser.GetId());
        }
    }
}
