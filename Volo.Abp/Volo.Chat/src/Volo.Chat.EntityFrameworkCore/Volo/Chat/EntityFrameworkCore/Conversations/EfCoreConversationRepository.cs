using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;

namespace Volo.Chat.EntityFrameworkCore.Conversations
{
    public class EfCoreConversationRepository : EfCoreRepository<IChatDbContext, Conversation, Guid>, IConversationRepository
    {
        public EfCoreConversationRepository(IDbContextProvider<IChatDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public async Task<ConversationPair> FindPairAsync(Guid senderId, Guid targetId, CancellationToken cancellationToken = default)
        {
            var matchedConversations = await DbSet
                .Where(x => (x.UserId == senderId && x.TargetUserId == targetId) ||
                            (x.UserId == targetId && x.TargetUserId == senderId)).ToListAsync(GetCancellationToken(cancellationToken));

            if (!matchedConversations.Any())
            {
                return null;
            }

            return new ConversationPair
            {
                SenderConversation = matchedConversations.Single(x=>x.UserId == senderId),
                TargetConversation = matchedConversations.Single(x=>x.UserId == targetId)
            };
        }

        public async Task<List<ConversationWithTargetUser>> GetListByUserIdAsync(Guid userId, string filter,
            CancellationToken cancellationToken = default)
        {
            var query = from chatConversation in DbSet
                join targetUser in DbContext.ChatUsers on chatConversation.TargetUserId equals targetUser.Id
                where userId == chatConversation.UserId && (targetUser.Name.Contains($"{filter}") || targetUser.Surname.Contains($"{filter}"))
                orderby chatConversation.LastMessageDate descending
                select new ConversationWithTargetUser
                {
                    Conversation = chatConversation,
                    TargetUser = targetUser
                };

            return await query.ToListAsync(GetCancellationToken(cancellationToken));
        }

        public async Task<int> GetTotalUnreadMessageCountAsync(Guid userId, CancellationToken cancellationToken = new CancellationToken())
        {
            return await DbSet.AsQueryable()
                .Where(x => x.UserId == userId && x.LastMessageSide == ChatMessageSide.Receiver)
                .SumAsync(x => x.UnreadMessageCount, cancellationToken: GetCancellationToken(cancellationToken));
        }
    }
}
