using Xunit;
using Volo.Chat.Repositories.Users;

namespace Volo.Chat.MongoDB.Users
{
    [Collection(MongoTestCollection.Name)]
   public class ChatUserRepository_Tests : ChatUserRepository_Tests<ChatMongoDbTestModule>
    {
    }
}
