using System;
using Volo.Abp.Domain.Entities;
using Volo.Abp.MultiTenancy;

namespace Volo.Chat.Messages
{
    public class UserMessage : Entity<Guid>, IMultiTenant, IAggregateRoot<Guid>
    {
        public virtual Guid? TenantId { get; protected set; }

        public virtual Guid ChatMessageId { get; protected set; }

        public virtual Guid UserId { get; protected set; }

        public virtual Guid? TargetUserId { get; protected set; }

        public virtual ChatMessageSide Side { get; protected set; }

        public virtual bool IsRead { get; protected set; }

        public virtual DateTime? ReadTime { get; protected set; }

        protected UserMessage()
        {

        }

        public UserMessage(
            Guid id, 
            Guid userId, 
            Guid chatMessageId, 
            ChatMessageSide side, 
            Guid? targetUserId = null, 
            Guid? tenantId = null)
        : base(id)
        {
            UserId = userId;
            ChatMessageId = chatMessageId;
            Side = side;
            TargetUserId = targetUserId;
            TenantId = tenantId;
        }

        public virtual void MarkAsRead(DateTime readTime)
        {
            IsRead = true;
            ReadTime = readTime;
        }
    }
}