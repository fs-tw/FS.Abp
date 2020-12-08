using Volo.Abp.MongoDB;
using Volo.Abp.Users.MongoDB;
using Volo.Chat.Users;

namespace Volo.Chat.MongoDB.Users
{
    public class MongoChatUserRepository : MongoUserRepositoryBase<IChatMongoDbContext, ChatUser>, IChatUserRepository
    {
        public MongoChatUserRepository(IMongoDbContextProvider<IChatMongoDbContext> dbContextProvider) 
            : base(dbContextProvider)
        {
        }
    }
}
