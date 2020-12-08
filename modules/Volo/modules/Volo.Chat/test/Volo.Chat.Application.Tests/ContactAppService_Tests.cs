using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using Shouldly;
using Volo.Abp.Users;
using Volo.Chat.Messages;
using Volo.Chat.Users;
using Xunit;

namespace Volo.Chat
{
    public class ContactAppService_Tests : ChatApplicationTestBase
    {
        private readonly ContactAppService _contactApService;
        private ICurrentUser _currentUser;
        private readonly ChatTestData _chatTestData;

        public ContactAppService_Tests()
        {
            _contactApService = GetRequiredService<ContactAppService>();
            _chatTestData = GetRequiredService<ChatTestData>();
        }


        protected override void AfterAddApplication(IServiceCollection services)
        {
            _currentUser = Substitute.For<ICurrentUser>();
            services.AddSingleton(_currentUser);
        }

        [Fact]
        public async Task GetContactsAsync()
        {
            _currentUser.Id.Returns(_chatTestData.User1Id);

            var contacts = await _contactApService.GetContactsAsync(new GetContactsInput());

            contacts.Count.ShouldBe(2);
            var user2 = contacts.FirstOrDefault(c => c.Username == "User2");
            user2.ShouldNotBeNull();
            user2.LastMessage.ShouldBe(_chatTestData.ConversationSampleMessage1);
            user2.LastMessageSide.ShouldBe(ChatMessageSide.Sender);
            user2.UnreadMessageCount.ShouldBe(0);
        }
    }
}
