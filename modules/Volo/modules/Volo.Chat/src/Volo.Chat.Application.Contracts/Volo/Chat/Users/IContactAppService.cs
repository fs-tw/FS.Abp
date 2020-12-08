using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace Volo.Chat.Users
{
    public interface IContactAppService : IApplicationService
    {
        Task<List<ChatContactDto>> GetContactsAsync(GetContactsInput input);

        Task<int> GetTotalUnreadMessageCountAsync();
    }
}
