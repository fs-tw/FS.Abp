using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Volo.Chat.Conversations
{
    public interface IConversationRepository :  IBasicRepository<Conversation, Guid>
    {
        Task<ConversationPair> FindPairAsync(Guid senderId, Guid targetId, CancellationToken cancellationToken = new CancellationToken());

        Task<List<ConversationWithTargetUser>> GetListByUserIdAsync(Guid userId, string filter, CancellationToken cancellationToken = new CancellationToken());

        Task<int> GetTotalUnreadMessageCountAsync(Guid userId, CancellationToken cancellationToken = new CancellationToken());
    }
}
