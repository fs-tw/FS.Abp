using Volo.Abp.Modularity;

namespace Volo.Chat.Repositories.Messages
{
    public abstract class ChatMessageRepository_Tests<TStartupModule> : ChatTestBase<TStartupModule>
        where TStartupModule : IAbpModule
    {
    }
}
