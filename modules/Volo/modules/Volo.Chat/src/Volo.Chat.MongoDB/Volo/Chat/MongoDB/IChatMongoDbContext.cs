using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.MongoDB
{
    [ConnectionStringName(ChatDbProperties.ConnectionStringName)]
    public interface IChatMongoDbContext : IAbpMongoDbContext
    {
        IMongoCollection<Message> ChatMessages { get; }

        IMongoCollection<ChatUser> ChatUsers { get; }

        IMongoCollection<UserMessage> ChatUserMessages { get; }

        IMongoCollection<Conversation> ChatConversations { get; }
    }
}
