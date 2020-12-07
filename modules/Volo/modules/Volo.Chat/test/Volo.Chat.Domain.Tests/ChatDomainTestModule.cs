using Volo.Chat.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo.Chat
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(ChatEntityFrameworkCoreTestModule)
        )]
    public class ChatDomainTestModule : AbpModule
    {
        
    }
}
