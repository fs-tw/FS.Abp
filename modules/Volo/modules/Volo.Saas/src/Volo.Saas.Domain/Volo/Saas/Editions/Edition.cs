using System;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Domain.Entities.Auditing;

namespace Volo.Saas.Editions
{
    public class Edition : FullAuditedAggregateRoot<Guid>
    {
        public virtual string DisplayName { get; protected set; }

        protected Edition()
        {

        }

        public Edition(Guid id, [NotNull] string displayName)
        {
            Id = id;
            SetDisplayName(displayName);
        }

        public virtual void SetDisplayName([NotNull] string displayName)
        {
            DisplayName = Check.NotNullOrWhiteSpace(displayName, nameof(displayName), EditionConsts.MaxDisplayNameLength);
        }
    }
}
