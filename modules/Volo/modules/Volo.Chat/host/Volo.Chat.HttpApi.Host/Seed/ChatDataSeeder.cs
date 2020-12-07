using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.Seed
{
    public class ChatDataSeeder : ITransientDependency
    {
        private readonly IGuidGenerator _guidGenerator;
        private readonly IChatUserLookupService _chatUserLookupService;
        private readonly IChatUserRepository _chatUserRepository;
        private readonly IUserMessageRepository _userMessageRepository;
        private readonly IMessageRepository _messageRepository;
        private readonly IConversationRepository _conversationRepository;

        public ChatDataSeeder(
            IGuidGenerator guidGenerator,
            IChatUserLookupService chatUserLookupService,
            IChatUserRepository chatUserRepository,
            IUserMessageRepository userMessageRepository,
            IMessageRepository messageRepository,
            IConversationRepository conversationRepository)
        {
            _guidGenerator = guidGenerator;
            _chatUserLookupService = chatUserLookupService;
            _chatUserRepository = chatUserRepository;
            _userMessageRepository = userMessageRepository;
            _messageRepository = messageRepository;
            _conversationRepository = conversationRepository;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (await IsSeedBeforeAsync())
            {
                return;
            }

            var userAdmin = await GetUserAsync("admin");
            var userJhon = await GetUserAsync("john");
            var userAlbert = await GetUserAsync("albert");

            /* Messaging between admin <-> john */

            var message1 = await CreateMessageAsync(context, "Hi!");
            await CreateUserMessageAsync(context, message1, userAdmin, userJhon);

            var message2 = await CreateMessageAsync(context, "Whats up?");
            await CreateUserMessageAsync(context, message2, userJhon, userAdmin);

            var message3 = await CreateMessageAsync(context, "I'm fine.");
            await CreateUserMessageAsync(context, message3, userAdmin, userJhon);

            var message4 = await CreateMessageAsync(context, "Me too.");
            await CreateUserMessageAsync(context, message4, userJhon, userAdmin);

            var message5 = await CreateMessageAsync(context, "Good bye!");
            await CreateUserMessageAsync(context, message5, userJhon, userAdmin);

            var conversation1 = new Conversation(_guidGenerator.Create(), userAdmin.Id, userJhon.Id)
            {
                LastMessageDate = message5.CreationTime,
                LastMessage = message5.Text,
                LastMessageSide = ChatMessageSide.Receiver
            };

            conversation1.AddUnreadMessage(5);

            await _conversationRepository.InsertAsync(conversation1);

            await _conversationRepository.InsertAsync(new Conversation(_guidGenerator.Create(), userJhon.Id, userAdmin.Id)
            {
                LastMessageDate = message5.CreationTime,
                LastMessage = message5.Text,
                LastMessageSide = ChatMessageSide.Sender
            });

            /* Messaging between admin <-> albert */

            var message6 = await CreateMessageAsync(context, "Hi!");
            await CreateUserMessageAsync(context, message6, userAdmin, userAlbert);

            var message7 = await CreateMessageAsync(context, "Whats up Albert?");
            await CreateUserMessageAsync(context, message7, userAdmin, userAlbert);

            var message8 = await CreateMessageAsync(context, "I'm fine admin :)");
            await CreateUserMessageAsync(context, message8, userAlbert, userAdmin);

            await _conversationRepository.InsertAsync(new Conversation(_guidGenerator.Create(), userAdmin.Id, userAlbert.Id)
            {
                LastMessageDate = message8.CreationTime,
                LastMessage = message8.Text,
                LastMessageSide = ChatMessageSide.Receiver
            });
            await _conversationRepository.InsertAsync(new Conversation(_guidGenerator.Create(), userAlbert.Id, userAdmin.Id)
            {
                LastMessageDate = message8.CreationTime,
                LastMessage = message8.Text,
                LastMessageSide = ChatMessageSide.Sender
            });
        }

        private async Task<ChatUser> GetUserAsync(string userName)
        {
            var user = await _chatUserLookupService.FindByUserNameAsync(userName);
            if (user == null)
            {
                throw new ApplicationException("User could not found!");
            }

            return user;
        }

        private async Task<Message> CreateMessageAsync(DataSeedContext context, string message)
        {
            return await _messageRepository.InsertAsync(
                new Message(
                    _guidGenerator.Create(),
                    message,
                    tenantId: context.TenantId
                )
            );
        }

        private async Task CreateUserMessageAsync(
            DataSeedContext context,
            Message message,
            ChatUser senderUser,
            ChatUser receiverUser)
        {
            await _userMessageRepository.InsertAsync(
                new UserMessage(
                    _guidGenerator.Create(),
                    senderUser.Id,
                    message.Id,
                    ChatMessageSide.Sender,
                    receiverUser.Id,
                    tenantId: context.TenantId
                )
            );

            await _userMessageRepository.InsertAsync(
                new UserMessage(
                    Guid.NewGuid(),
                    receiverUser.Id,
                    message.Id,
                    ChatMessageSide.Receiver,
                    senderUser.Id,
                    tenantId: context.TenantId
                )
            );
        }

        private async Task<bool> IsSeedBeforeAsync()
        {
            return await _chatUserRepository.FindByUserNameAsync("admin") != null;
        }
    }
}
