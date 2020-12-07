using System.Threading.Tasks;
using Volo.Abp.Modularity;
using Volo.Chat.Users;

namespace Volo.Chat.Repositories.Users
{
    public abstract class ChatUserRepository_Tests<TStartupModule> : ChatTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
    }
}
