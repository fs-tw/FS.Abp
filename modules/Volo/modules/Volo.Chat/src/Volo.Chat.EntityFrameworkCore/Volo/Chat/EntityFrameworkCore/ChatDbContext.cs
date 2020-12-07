using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.EntityFrameworkCore
{
    [ConnectionStringName(ChatDbProperties.ConnectionStringName)]
    public class ChatDbContext : AbpDbContext<ChatDbContext>, IChatDbContext
    {
        public DbSet<Message> ChatMessages { get; set; }

        public DbSet<ChatUser> ChatUsers { get; set; }

        public DbSet<UserMessage> ChatUserMessages { get; set; }

        public DbSet<Conversation> ChatConversations { get; set; }

        public ChatDbContext(DbContextOptions<ChatDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureChat();
        }
    }
}