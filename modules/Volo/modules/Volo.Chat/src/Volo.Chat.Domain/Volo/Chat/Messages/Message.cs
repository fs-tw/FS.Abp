using System;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace Volo.Chat.Messages
{
    public class Message : CreationAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public virtual Guid? TenantId { get; protected set; }

        [NotNull]
        public virtual string Text { get; protected set; }

        public virtual bool IsAllRead { get; protected set; }

        public virtual DateTime? ReadTime { get; protected set; }

        protected Message()
        {

        }

        public Message(
            Guid id, 
            [NotNull] string text, 
            Guid? tenantId = null)
        : base(id)
        {
            Text = Check.NotNullOrWhiteSpace(text, nameof(text), ChatMessageConsts.MaxTextLength);
            TenantId = tenantId;
        }

        public virtual void MarkAsAllRead(DateTime readTime)
        {
            IsAllRead = true;
            ReadTime = readTime;
        }
    }
}
