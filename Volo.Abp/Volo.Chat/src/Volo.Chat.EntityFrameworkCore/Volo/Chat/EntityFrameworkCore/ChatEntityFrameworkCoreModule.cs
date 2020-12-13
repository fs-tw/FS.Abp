using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.Users.EntityFrameworkCore;
using Volo.Chat.Conversations;
using Volo.Chat.EntityFrameworkCore.Conversations;
using Volo.Chat.EntityFrameworkCore.Messages;
using Volo.Chat.EntityFrameworkCore.Users;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.EntityFrameworkCore
{
    [DependsOn(
        typeof(ChatDomainModule),
        typeof(AbpUsersEntityFrameworkCoreModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class ChatEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ChatDbContext>(options =>
            {
                options.AddRepository<Message, EfCoreMessageRepository>();
                options.AddRepository<UserMessage, EfCoreUserMessageRepository>();
                options.AddRepository<ChatUser, EfCoreChatUserRepository>();
                options.AddRepository<Conversation, EfCoreConversationRepository>();
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}