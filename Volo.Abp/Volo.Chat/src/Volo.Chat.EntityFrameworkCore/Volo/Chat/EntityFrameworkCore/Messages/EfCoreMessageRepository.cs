using System;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Chat.Messages;

namespace Volo.Chat.EntityFrameworkCore.Messages
{
    public class EfCoreMessageRepository : EfCoreRepository<IChatDbContext, Message, Guid>, IMessageRepository
    {
        public EfCoreMessageRepository(IDbContextProvider<IChatDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }
    }
}
