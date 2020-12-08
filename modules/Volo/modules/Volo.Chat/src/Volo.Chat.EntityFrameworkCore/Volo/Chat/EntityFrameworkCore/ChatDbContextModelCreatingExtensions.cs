using System;
using Microsoft.EntityFrameworkCore;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.Users.EntityFrameworkCore;
using Volo.Chat.Conversations;
using Volo.Chat.Messages;
using Volo.Chat.Users;

namespace Volo.Chat.EntityFrameworkCore
{
    public static class ChatDbContextModelCreatingExtensions
    {
        public static void ConfigureChat(
            this ModelBuilder builder,
            Action<ChatModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new ChatModelBuilderConfigurationOptions(
                ChatDbProperties.DbTablePrefix,
                ChatDbProperties.DbSchema
            );

            optionsAction?.Invoke(options);

            builder.Entity<ChatUser>(b =>
            {
                //Configure table & schema name
                b.ToTable(options.TablePrefix + "Users", options.Schema);

                b.ConfigureByConvention();
                b.ConfigureAbpUser();
            });

            builder.Entity<Message>(b =>
            {
                //Configure table & schema name
                b.ToTable(options.TablePrefix + "Messages", options.Schema);

                b.ConfigureByConvention();

                b.Property(x => x.Text).IsRequired().HasColumnName(nameof(Message.Text)).HasMaxLength(ChatMessageConsts.MaxTextLength);
                b.Property(x => x.IsAllRead).HasColumnName(nameof(Message.IsAllRead));
                b.Property(x => x.ReadTime).HasColumnName(nameof(Message.ReadTime));
            });

            builder.Entity<UserMessage>(b =>
            {
                //Configure table & schema name
                b.ToTable(options.TablePrefix + "UserMessages", options.Schema);

                b.ConfigureByConvention();

                b.Property(x => x.ChatMessageId).IsRequired().HasColumnName(nameof(UserMessage.ChatMessageId));
                b.Property(x => x.UserId).IsRequired().HasColumnName(nameof(UserMessage.UserId));
                b.Property(x => x.TargetUserId).HasColumnName(nameof(UserMessage.TargetUserId));
                b.Property(x => x.Side).HasColumnName(nameof(UserMessage.Side));
                b.Property(x => x.IsRead).HasColumnName(nameof(UserMessage.IsRead));
                b.Property(x => x.ReadTime).HasColumnName(nameof(UserMessage.ReadTime));

                b.HasOne<Message>().WithMany().HasForeignKey(p => p.ChatMessageId).OnDelete(DeleteBehavior.Cascade);

                b.HasIndex(x => x.UserId );
                b.HasIndex(x => new { x.UserId, x.TargetUserId} );
            });

            builder.Entity<Conversation>(b =>
            {
                //Configure table & schema name
                b.ToTable(options.TablePrefix + "Conversations", options.Schema);

                b.ConfigureByConvention();

                b.Property(x => x.UserId).IsRequired().HasColumnName(nameof(Conversation.UserId));
                b.Property(x => x.TargetUserId).HasColumnName(nameof(Conversation.TargetUserId));
                b.Property(x => x.LastMessage).HasColumnName(nameof(Conversation.LastMessage)).HasMaxLength(ChatMessageConsts.MaxTextLength);
                b.Property(x => x.LastMessageSide).HasColumnName(nameof(Conversation.LastMessageSide));
                b.Property(x => x.LastMessageDate).HasColumnName(nameof(Conversation.LastMessageDate));
                b.Property(x => x.UnreadMessageCount).HasColumnName(nameof(Conversation.UnreadMessageCount));

                b.HasIndex(x => x.UserId );
            });
        }
    }
}