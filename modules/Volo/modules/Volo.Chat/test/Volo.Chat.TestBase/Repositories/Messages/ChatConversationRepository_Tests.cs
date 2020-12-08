using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Modularity;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;
using Xunit;

namespace Volo.Chat.Repositories.Messages
{
    public abstract class ChatConversationRepository_Tests<TStartupModule> : ChatTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly IConversationRepository _repository;
        private readonly ChatTestData _chatTestData;

        public ChatConversationRepository_Tests()
        {
            _repository = GetRequiredService<IConversationRepository>();
            _chatTestData = GetRequiredService<ChatTestData>();
        }

        [Fact]
        public async Task FindPairAsync()
        {
            var pair = await _repository.FindPairAsync(_chatTestData.User1Id, _chatTestData.User2Id);

            pair.ShouldNotBeNull();

            pair.SenderConversation.ShouldNotBeNull();
            pair.SenderConversation.UserId.ShouldBe(_chatTestData.User1Id);
            pair.SenderConversation.TargetUserId.ShouldBe(_chatTestData.User2Id);

            pair.TargetConversation.ShouldNotBeNull();
            pair.TargetConversation.UserId.ShouldBe(_chatTestData.User2Id);
            pair.TargetConversation.TargetUserId.ShouldBe(_chatTestData.User1Id);
        }

        [Fact]
        public async Task GetListByUserIdAsync()
        {
            var list = await _repository.GetListByUserIdAsync(_chatTestData.User1Id, null);

            list.ShouldNotBeNull();
            list.Count.ShouldBe(2);
        }
    }
}
