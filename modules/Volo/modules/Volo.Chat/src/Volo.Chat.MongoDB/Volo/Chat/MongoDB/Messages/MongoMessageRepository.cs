using System;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;
using Volo.Chat.Messages;

namespace Volo.Chat.MongoDB.Messages
{
    public class MongoMessageRepository : MongoDbRepository<IChatMongoDbContext, Message, Guid>, IMessageRepository
    {
        public MongoMessageRepository(IMongoDbContextProvider<IChatMongoDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}
