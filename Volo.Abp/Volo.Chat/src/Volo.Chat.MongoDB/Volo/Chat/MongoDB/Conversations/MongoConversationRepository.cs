using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;

namespace Volo.Chat.MongoDB.Messages
{
    public class MongoConversationRepository : MongoDbRepository<IChatMongoDbContext, Conversation, Guid>, IConversationRepository
    {
        public MongoConversationRepository(IMongoDbContextProvider<IChatMongoDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public async Task<ConversationPair> FindPairAsync(Guid senderId, Guid targetId, CancellationToken cancellationToken = default)
        {
            var matchedConversations = await GetMongoQueryable()
                .Where(x => (x.UserId == senderId && x.TargetUserId == targetId) ||
                            (x.UserId == targetId && x.TargetUserId == senderId)).ToListAsync(GetCancellationToken(cancellationToken));

            if (!matchedConversations.Any())
            {
                return null;
            }

            return new ConversationPair
            {
                SenderConversation = matchedConversations.Single(x => x.UserId == senderId),
                TargetConversation = matchedConversations.Single(x => x.UserId == targetId)
            };
        }

        public async Task<List<ConversationWithTargetUser>> GetListByUserIdAsync(Guid userId, string filter, CancellationToken cancellationToken = default)
        {
            var conversationsWithTargetDetails = await (from chatConversation in GetMongoQueryable()
                        join targetUser in DbContext.ChatUsers on chatConversation.TargetUserId equals targetUser.Id
                where userId == chatConversation.UserId && (targetUser.Name.Contains($"{filter}") || targetUser.Surname.Contains($"{filter}"))
                orderby chatConversation.LastMessageDate descending
                select new ConversationWithTargetUser
                {
                    TargetUser = targetUser
                }).ToListAsync(cancellationToken);

            var conversations = await GetMongoQueryable().Where(x=> x.UserId == userId).ToListAsync(GetCancellationToken(cancellationToken));

            foreach (var conversationWithTargetDetails in conversationsWithTargetDetails)
            {
                conversationWithTargetDetails.Conversation =
                    conversations.Single(x => x.TargetUserId == conversationWithTargetDetails.TargetUser.Id);
            }

            return conversationsWithTargetDetails;
        }

        public async Task<int> GetTotalUnreadMessageCountAsync(Guid userId, CancellationToken cancellationToken = new CancellationToken())
        {
            return await GetMongoQueryable()
                .Where(x => x.UserId == userId && x.LastMessageSide == ChatMessageSide.Receiver)
                .SumAsync(x => x.UnreadMessageCount, cancellationToken: GetCancellationToken(cancellationToken));
        }
    }
}
