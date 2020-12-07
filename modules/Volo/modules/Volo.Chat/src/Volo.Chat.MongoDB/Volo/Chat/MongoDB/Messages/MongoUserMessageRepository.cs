using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MongoDB.Driver.Linq;
using MongoDB.Driver;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;
using Volo.Chat.Messages;

namespace Volo.Chat.MongoDB.Messages
{
    public class MongoUserMessageRepository : MongoDbRepository<IChatMongoDbContext, UserMessage, Guid>, IUserMessageRepository
    {
        public MongoUserMessageRepository(IMongoDbContextProvider<IChatMongoDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public async Task<List<MessageWithDetails>> GetMessagesAsync(Guid userId, Guid targetUserId, int skipCount, int maxResultCount,
            CancellationToken cancellationToken = default)
        {
            var messageListQuery = from chatUserMessage in GetMongoQueryable()
                              join message in DbContext.ChatMessages on chatUserMessage.ChatMessageId equals message.Id
                              where userId == chatUserMessage.UserId && targetUserId == chatUserMessage.TargetUserId
                              select new MessageWithDetails
                              {
                                  Message = message
                              };

            var userMessageListQuery = GetMongoQueryable().Where(x => x.UserId == userId && x.TargetUserId == targetUserId);

            var chatMessageWithDetailsList = await messageListQuery.OrderByDescending(x => x.Message.CreationTime)
                .PageBy<MessageWithDetails, IMongoQueryable<MessageWithDetails>>(skipCount, maxResultCount)
                .ToListAsync(GetCancellationToken(cancellationToken));

            var userMessagesList = await userMessageListQuery
                .PageBy<UserMessage, IMongoQueryable<UserMessage>>(skipCount, maxResultCount)
                .ToListAsync(GetCancellationToken(cancellationToken));

            foreach (var chatMessageWithDetails in chatMessageWithDetailsList)
            {
                chatMessageWithDetails.UserMessage = 
                    userMessagesList.Find(x=>x.ChatMessageId == chatMessageWithDetails.Message.Id);
            }

            return chatMessageWithDetailsList;
        }
    }
}
