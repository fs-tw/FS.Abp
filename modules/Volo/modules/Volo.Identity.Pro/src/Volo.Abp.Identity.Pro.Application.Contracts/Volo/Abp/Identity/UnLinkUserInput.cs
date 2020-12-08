using System;

namespace Volo.Abp.Identity
{
    public class UnLinkUserInput
    {
        public Guid UserId { get; set; }

        public Guid? TenantId { get; set; }
    }
}
