using System;

namespace Volo.Abp.Account.ExternalProviders
{
    public class GetByNameInput
    {
        public Guid? TenantId { get; set; }

        public string Name { get; set; }
    }
}
