using Xunit;
using Volo.Chat.Repositories.Messages;

namespace Volo.Chat.MongoDB.Messages
{
    [Collection(MongoTestCollection.Name)]
    public class ChatMessageRepository_Tests : ChatMessageRepository_Tests<ChatMongoDbTestModule>
    {
    }
}
