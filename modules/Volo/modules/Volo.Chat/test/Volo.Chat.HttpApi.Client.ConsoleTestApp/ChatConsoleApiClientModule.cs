using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace Volo.Chat
{
    [DependsOn(
        typeof(ChatHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ChatConsoleApiClientModule : AbpModule
    {
        
    }
}
