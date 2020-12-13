using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.MongoDB
{
    [ConnectionStringName(ChatDbProperties.ConnectionStringName)]
    public class ChatMongoDbContext : AbpMongoDbContext, IChatMongoDbContext
    {
        public IMongoCollection<Message> ChatMessages => Collection<Message>();

        public IMongoCollection<ChatUser> ChatUsers => Collection<ChatUser>();

        public IMongoCollection<UserMessage> ChatUserMessages => Collection<UserMessage>();

        public IMongoCollection<Conversation> ChatConversations => Collection<Conversation>();

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureChat();
        }
    }
}