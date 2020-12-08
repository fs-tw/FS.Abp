using Xunit;
using Volo.Chat.Repositories.Messages;

namespace Volo.Chat.MongoDB.Messages
{
    [Collection(MongoTestCollection.Name)]
    public class ChatUserMessageRepository_Tests : ChatUserMessageRepository_Tests<ChatMongoDbTestModule>
    {
    }
}
