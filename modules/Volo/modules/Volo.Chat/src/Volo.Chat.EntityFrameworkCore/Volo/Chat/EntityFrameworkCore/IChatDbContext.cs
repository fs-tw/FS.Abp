using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.EntityFrameworkCore
{
    [ConnectionStringName(ChatDbProperties.ConnectionStringName)]
    public interface IChatDbContext : IEfCoreDbContext
    {
        DbSet<Message> ChatMessages { get; set; }

        DbSet<ChatUser> ChatUsers { get; set; }

        DbSet<UserMessage> ChatUserMessages { get; set; }

        DbSet<Conversation> ChatConversations { get; set; }
    }
}