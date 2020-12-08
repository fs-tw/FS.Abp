using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Volo.Abp.DependencyInjection;

namespace Volo.Chat.Messages
{
    [Dependency(ReplaceServices = true)]
    public class SignalRRealTimeChatMessageSender : IRealTimeChatMessageSender, ITransientDependency
    {
        protected IHubContext<ChatHub> ChatHubContext { get; }

        public SignalRRealTimeChatMessageSender(IHubContext<ChatHub> chatHubContext)
        {
            ChatHubContext = chatHubContext;
        }

        public async Task SendAsync(Guid targetUserId, ChatMessageRdto message)
        {
            await ChatHubContext
                .Clients
                .User(targetUserId.ToString())
                .SendAsync(
                    "ReceiveMessage",
                    message
                );
        }
    }
}
