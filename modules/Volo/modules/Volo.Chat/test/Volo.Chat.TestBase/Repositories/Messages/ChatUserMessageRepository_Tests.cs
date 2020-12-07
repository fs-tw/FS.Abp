using System.Linq;
using System.Threading.Tasks;
using Shouldly;
using Volo.Abp.Modularity;
using Volo.Chat.Messages;
using Xunit;

namespace Volo.Chat.Repositories.Messages
{
    public abstract class ChatUserMessageRepository_Tests<TStartupModule> : ChatTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
        private readonly IUserMessageRepository _repository;
        private readonly ChatTestData _chatTestData;

        public ChatUserMessageRepository_Tests()
        {
            _repository = GetRequiredService<IUserMessageRepository>();
            _chatTestData = GetRequiredService<ChatTestData>();
        }

        [Fact]
        public async Task GetMessagesAsync()
        {
            var messages = await _repository.GetMessagesAsync(_chatTestData.User1Id, _chatTestData.User2Id, 0, 50);

            messages.ShouldNotBeNull();
            messages.Any().ShouldBe(true);
            messages.Count.ShouldBe(5);
            messages.ShouldContain(x => x.Message.Text == _chatTestData.ConversationSampleMessage1);
        }
    }
}
