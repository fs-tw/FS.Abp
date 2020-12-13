using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using Xunit;
using Shouldly;
using Volo.Abp.Users;
using Volo.Chat.Messages;

namespace Volo.Chat
{
    public class MessagingManager_Tests : ChatDomainTestBase
    {
        private readonly MessagingManager _messagingManager;
        private readonly ChatTestData _chatTestData;
        private ICurrentUser _currentUser;

        public MessagingManager_Tests()
        {
            _messagingManager = GetRequiredService<MessagingManager>();
            _chatTestData = GetRequiredService<ChatTestData>();
        }


        protected override void AfterAddApplication(IServiceCollection services)
        {
            _currentUser = Substitute.For<ICurrentUser>();
            services.AddSingleton(_currentUser);
        }

        [Fact]
        public async Task CreateNewMessage()
        {
            var messagesText = "Hellllooo!";
            await _messagingManager.CreateNewMessage(_chatTestData.User2Id, _chatTestData.User3Id, messagesText);

            UsingDbContext(context =>
            {
                var user2Messages = context.ChatUserMessages.Where(x=>x.UserId == _chatTestData.User2Id && x.TargetUserId == _chatTestData.User3Id).ToList();
                user2Messages.ShouldNotBeNull();
                user2Messages.Count.ShouldBe(1);
                user2Messages.First().Side.ShouldBe(ChatMessageSide.Sender);

                var user3Messages = context.ChatUserMessages.Where(x=>x.UserId == _chatTestData.User3Id && x.TargetUserId == _chatTestData.User2Id).ToList();
                user3Messages.ShouldNotBeNull();
                user3Messages.Count.ShouldBe(1);
                user3Messages.First().Side.ShouldBe(ChatMessageSide.Receiver);

                user2Messages.First().ChatMessageId.ShouldBe(user3Messages.First().ChatMessageId);

                var message = context.ChatMessages.FirstOrDefault(x => x.Id == user2Messages.First().ChatMessageId);

                message.Text.ShouldBe(messagesText);
            });
        }


        [Fact]
        public async Task ReadMessagesAsync()
        {
            _currentUser.Id.Returns(_chatTestData.User1Id);

            var messages = await _messagingManager.ReadMessagesAsync(_chatTestData.User2Id, 0, 50);

            messages.Count.ShouldBe(5);

            messages.All(x => x.UserMessage.IsRead).ShouldBeTrue();
        }
    }
}
