using System;
using Volo.Abp.Domain.Repositories;

namespace Volo.Chat.Messages
{
    public interface IMessageRepository : IBasicRepository<Message, Guid>
    {

    }
}
