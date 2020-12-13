using System;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Guids;
using Volo.Abp.Users;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat
{
    public class ChatDataSeedContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly ChatTestData _chatTestData;
        private readonly IGuidGenerator _guidGenerator;
        private readonly IChatUserRepository _chatUserRepository;
        private readonly IUserMessageRepository _userMessageRepository;
        private readonly IMessageRepository _messageRepository;
        private readonly IConversationRepository _conversationRepository;

        public ChatDataSeedContributor( ChatTestData chatTestData,
            IGuidGenerator guidGenerator,
            IChatUserRepository chatUserRepository,
            IUserMessageRepository userMessageRepository,
            IMessageRepository messageRepository,
            IConversationRepository conversationRepository)
        {
            _chatTestData = chatTestData;
            _guidGenerator = guidGenerator;
            _chatUserRepository = chatUserRepository;
            _userMessageRepository = userMessageRepository;
            _messageRepository = messageRepository;
            _conversationRepository = conversationRepository;
        }
        
        public async Task SeedAsync(DataSeedContext context)
        {
            await _chatUserRepository.InsertAsync(new ChatUser(new UserData(_chatTestData.User1Id, "user1","user1@volo.com", "user","1")));
            await _chatUserRepository.InsertAsync(new ChatUser(new UserData(_chatTestData.User2Id, _chatTestData.User2UserName, "user2@volo.com", _chatTestData.User2Name,"2")));
            await _chatUserRepository.InsertAsync(new ChatUser(new UserData(_chatTestData.User3Id, "user3","user3@volo.com", "user","3")));

            var message1 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(),"Hi!"));
            var message2 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(),"Whats up?"));
            var message3 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(),"I'm fine."));
            var message4 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(),"Me too."));
            var message5 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(),_chatTestData.ConversationSampleMessage1));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message1.Id, ChatMessageSide.Sender, _chatTestData.User2Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User2Id, message1.Id, ChatMessageSide.Receiver, _chatTestData.User1Id));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message2.Id, ChatMessageSide.Receiver, _chatTestData.User2Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User2Id, message2.Id, ChatMessageSide.Sender, _chatTestData.User1Id));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message3.Id, ChatMessageSide.Sender, _chatTestData.User2Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User2Id, message3.Id, ChatMessageSide.Receiver, _chatTestData.User1Id));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message4.Id, ChatMessageSide.Receiver, _chatTestData.User2Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User2Id, message4.Id, ChatMessageSide.Sender, _chatTestData.User1Id));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message5.Id, ChatMessageSide.Receiver, _chatTestData.User2Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User2Id, message5.Id, ChatMessageSide.Sender, _chatTestData.User1Id));


            var conversation1 = new Conversation(_guidGenerator.Create(), _chatTestData.User1Id, _chatTestData.User2Id)
            {
                LastMessageDate = message5.CreationTime,
                LastMessage = message5.Text,
                LastMessageSide = ChatMessageSide.Sender
            };


            await _conversationRepository.InsertAsync(conversation1);


            var conversation2 = new Conversation(_guidGenerator.Create(), _chatTestData.User2Id, _chatTestData.User1Id)
            {
                LastMessageDate = message5.CreationTime,
                LastMessage = message5.Text,
                LastMessageSide = ChatMessageSide.Receiver
            };

            conversation2.AddUnreadMessage(5);

            await _conversationRepository.InsertAsync(conversation2);

            var message6 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(), "Hi!"));
            var message7 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(), "Whats up?"));
            var message8 = await _messageRepository.InsertAsync(new Message(Guid.NewGuid(), "I'm fine."));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message6.Id, ChatMessageSide.Sender, _chatTestData.User3Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User3Id, message6.Id, ChatMessageSide.Receiver, _chatTestData.User1Id));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message7.Id, ChatMessageSide.Sender, _chatTestData.User3Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User3Id, message7.Id, ChatMessageSide.Receiver, _chatTestData.User1Id));

            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User1Id, message8.Id, ChatMessageSide.Receiver, _chatTestData.User3Id));
            await _userMessageRepository.InsertAsync(new UserMessage(Guid.NewGuid(), _chatTestData.User3Id, message8.Id, ChatMessageSide.Sender, _chatTestData.User1Id));

            await _conversationRepository.InsertAsync(new Conversation(_guidGenerator.Create(), _chatTestData.User1Id, _chatTestData.User3Id)
            {
                LastMessageDate = message8.CreationTime,
                LastMessage = message8.Text,
                LastMessageSide = ChatMessageSide.Sender
            });
            await _conversationRepository.InsertAsync(new Conversation(_guidGenerator.Create(), _chatTestData.User3Id, _chatTestData.User1Id)
            {
                LastMessageDate = message8.CreationTime,
                LastMessage = message8.Text,
                LastMessageSide = ChatMessageSide.Receiver
            });
        }
    }
}