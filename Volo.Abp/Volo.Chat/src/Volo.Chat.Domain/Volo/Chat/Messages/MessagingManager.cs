using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Services;
using Volo.Abp.Users;
using Volo.Chat.Conversations;
using Volo.Chat.Users;

namespace Volo.Chat.Messages
{
    public class MessagingManager : DomainService
    {
        public ICurrentUser CurrentUser { get; } //TODO: Don't use CurrentUser in the domain service

        private readonly IMessageRepository _messageRepository;
        private readonly IUserMessageRepository _userMessageRepository;
        private readonly IChatUserLookupService _chatUserLookupService;
        private readonly IConversationRepository _conversationRepository;

        public MessagingManager(
            IMessageRepository messageRepository,
            IUserMessageRepository userMessageRepository,
            IChatUserLookupService chatUserLookupService,
            IConversationRepository conversationRepository,
            ICurrentUser currentUser)
        {
            CurrentUser = currentUser;
            _messageRepository = messageRepository;
            _userMessageRepository = userMessageRepository;
            _chatUserLookupService = chatUserLookupService;
            _conversationRepository = conversationRepository;
        }

        public async Task CreateNewMessage(Guid senderId, Guid receiverId, [NotNull] string messageText)
        {
            Check.NotNullOrWhiteSpace(messageText, nameof(messageText));

            var receiverUser = await _chatUserLookupService.FindByIdAsync(receiverId);
            if (receiverUser == null)
            {
                throw new BusinessException("Volo.Chat:010002");
            }

            var message = await _messageRepository.InsertAsync(new Message(
                GuidGenerator.Create(),
                messageText,
                tenantId: CurrentTenant.Id
            ));

            await _userMessageRepository.InsertAsync(
                new UserMessage(GuidGenerator.Create(),
                    senderId,
                    message.Id,
                    ChatMessageSide.Sender,
                    receiverId,
                    CurrentTenant.Id
                ));

            await _userMessageRepository.InsertAsync(
                new UserMessage(GuidGenerator.Create(),
                    receiverId,
                    message.Id,
                    ChatMessageSide.Receiver,
                    senderId,
                    CurrentTenant.Id
                ));

            await CreateOrUpdateConversationWithNewMessageAsync(senderId, receiverId, messageText);
        }

        private async Task CreateOrUpdateConversationWithNewMessageAsync(Guid senderId, Guid receiverId, string messageText)
        {
            var now = Clock.Now;
            var conversationPair = await _conversationRepository.FindPairAsync(senderId, receiverId);

            if (conversationPair == null)
            {
                var senderConversation = new Conversation(GuidGenerator.Create(), senderId, receiverId, CurrentTenant.Id)
                {
                    LastMessageSide = ChatMessageSide.Sender,
                    LastMessage = messageText,
                    LastMessageDate = now
                };

                var receiverConversation = new Conversation(GuidGenerator.Create(), receiverId,senderId, CurrentTenant.Id)
                {
                    LastMessageSide = ChatMessageSide.Receiver,
                    LastMessage = messageText,
                    LastMessageDate = now
                };

                receiverConversation.AddUnreadMessage();

                await _conversationRepository.InsertAsync(senderConversation);
                await _conversationRepository.InsertAsync(receiverConversation);

                return;
            }

            conversationPair.SenderConversation.SetLastMessage(messageText, now, ChatMessageSide.Sender);
            conversationPair.TargetConversation.SetLastMessage(messageText, now, ChatMessageSide.Receiver);

            await _conversationRepository.UpdateAsync(conversationPair.SenderConversation);
            await _conversationRepository.UpdateAsync(conversationPair.TargetConversation);
        }

        public async Task<List<MessageWithDetails>> ReadMessagesAsync(Guid targetUserId, int skipCount, int maxResultCount)
        {
            var messages = await _userMessageRepository.GetMessagesAsync(CurrentUser.GetId(), targetUserId, skipCount, maxResultCount);

            //TODO: Optimize
            foreach (var message in messages.Where(m => !m.UserMessage.IsRead).ToArray())
            {
                message.UserMessage.MarkAsRead(Clock.Now);
                await _userMessageRepository.UpdateAsync(message.UserMessage);

                message.Message.MarkAsAllRead(Clock.Now);
                await _messageRepository.UpdateAsync(message.Message);
            }

            var conversationPair = await _conversationRepository.FindPairAsync(CurrentUser.GetId(), targetUserId);
            conversationPair.SenderConversation.ResetUnreadMessageCount();
            
            await _conversationRepository.UpdateAsync(conversationPair.SenderConversation);
            await _conversationRepository.UpdateAsync(conversationPair.TargetConversation);

            return messages;
        }
    }
}
