using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using Shouldly;
using Volo.Abp.Users;
using Volo.Chat.Conversations;
using Xunit;

namespace Volo.Chat
{
    public class ConversationAppService_Tests : ChatApplicationTestBase
    {
        private readonly ConversationAppService _conversationApService;
        private ICurrentUser _currentUser;
        private readonly ChatTestData _chatTestData;

        public ConversationAppService_Tests()
        {
            _conversationApService = GetRequiredService<ConversationAppService>();
            _chatTestData = GetRequiredService<ChatTestData>();
        }


        protected override void AfterAddApplication(IServiceCollection services)
        {
            _currentUser = Substitute.For<ICurrentUser>();
            services.AddSingleton(_currentUser);
        }

        [Fact]
        public async Task GetConversationAsync()
        {
            _currentUser.Id.Returns(_chatTestData.User1Id);

            var conversation = await _conversationApService.GetConversationAsync(new GetConversationInput
            {
                MaxResultCount = 50, SkipCount = 0, TargetUserId = _chatTestData.User2Id
            });

            conversation.Messages.Count.ShouldBe(5);

            conversation.Messages.First().Message.ShouldBe(_chatTestData.ConversationSampleMessage1);

            conversation.TargetUserInfo.Username.ShouldBe(_chatTestData.User2UserName);
            conversation.TargetUserInfo.Username.ShouldBe(_chatTestData.User2UserName);
        }

        [Fact]
        public async Task MarkConversationAsReadAsync()
        {
            _currentUser.Id.Returns(_chatTestData.User2Id);

            await _conversationApService.MarkConversationAsReadAsync(new MarkConversationAsReadInput
            {
                TargetUserId = _chatTestData.User1Id
            });

            UsingDbContext(context =>
            {
                var conversation = context.ChatConversations.Where(x =>
                    x.UserId == _currentUser.Id && x.TargetUserId == _chatTestData.User1Id).ToList();

                conversation.Count.ShouldBe(1);
                conversation.First().UnreadMessageCount.ShouldBe(0);
            });
        }
    }
}
