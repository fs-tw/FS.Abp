using System;

namespace Volo.Abp.IdentityServer.IdentityResource.Dtos
{
    public class IdentityResourceClaimDto
    {
        public Guid IdentityResourceId { get; set; }

        public string Type { get; set; }
    }
}
