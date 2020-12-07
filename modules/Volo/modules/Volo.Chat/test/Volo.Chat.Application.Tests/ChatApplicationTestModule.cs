using Volo.Abp.Modularity;

namespace Volo.Chat
{
    [DependsOn(
        typeof(ChatApplicationModule),
        typeof(ChatDomainTestModule)
        )]
    public class ChatApplicationTestModule : AbpModule
    {

    }
}
