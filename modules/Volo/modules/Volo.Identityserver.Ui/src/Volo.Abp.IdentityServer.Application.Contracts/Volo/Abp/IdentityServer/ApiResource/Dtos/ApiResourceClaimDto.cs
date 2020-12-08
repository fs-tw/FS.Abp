using System;

namespace Volo.Abp.IdentityServer.ApiResource.Dtos
{
    public class ApiResourceClaimDto
    {
        public Guid ApiResourceId { get; set; }

        public string Type { get; set; }
    }
}
