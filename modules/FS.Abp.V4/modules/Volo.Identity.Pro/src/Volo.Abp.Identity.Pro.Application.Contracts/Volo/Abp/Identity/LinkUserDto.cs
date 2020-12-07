using System;

namespace Volo.Abp.Identity
{
    public class LinkUserDto
    {
        public virtual Guid TargetUserId { get; set; }

        public virtual string TargetUserName { get; set; }

        public virtual Guid? TargetTenantId { get; set; }

        public virtual string TargetTenantName { get; set; }
    }
}
