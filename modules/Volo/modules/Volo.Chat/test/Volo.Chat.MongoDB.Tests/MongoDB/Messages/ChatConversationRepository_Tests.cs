using Volo.Chat.Repositories.Messages;
using Xunit;

namespace Volo.Chat.MongoDB.Messages
{
    [Collection(MongoTestCollection.Name)]
    public class ChatConversationRepository_Tests : ChatConversationRepository_Tests<ChatMongoDbTestModule>
    {
    }
}
