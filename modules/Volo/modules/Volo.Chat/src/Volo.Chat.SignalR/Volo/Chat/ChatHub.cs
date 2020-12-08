using Microsoft.AspNetCore.Authorization;
using Volo.Abp.AspNetCore.SignalR;
using Volo.Chat.Authorization;

namespace Volo.Chat
{
    [Authorize(ChatPermissions.Messaging)]
    public class ChatHub : AbpHub
    {
        
    }
}
