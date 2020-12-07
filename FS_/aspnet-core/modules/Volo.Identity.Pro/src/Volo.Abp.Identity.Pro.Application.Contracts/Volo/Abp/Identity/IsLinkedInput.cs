using System;

namespace Volo.Abp.Identity
{
    public class IsLinkedInput
    {
        public Guid UserId { get; set; }

        public Guid? TenantId { get; set; }
    }
}
