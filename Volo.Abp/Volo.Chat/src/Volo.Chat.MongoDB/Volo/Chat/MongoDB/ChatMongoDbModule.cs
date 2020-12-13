using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;
using Volo.Abp.Users.MongoDB;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.MongoDB.Messages;
using Volo.Chat.MongoDB.Users;
using Volo.Chat.Users;

namespace Volo.Chat.MongoDB
{
    [DependsOn(
        typeof(ChatDomainModule),
        typeof(AbpUsersMongoDbModule),
        typeof(AbpMongoDbModule)
    )]
    public class ChatMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<ChatMongoDbContext>(options =>
            {
                options.AddRepository<Message, MongoMessageRepository>();
                options.AddRepository<UserMessage, MongoUserMessageRepository>();
                options.AddRepository<ChatUser, MongoChatUserRepository>();
                options.AddRepository<Conversation, MongoConversationRepository>();
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, MongoQuestionRepository>();
                 */
            });
        }
    }
}
