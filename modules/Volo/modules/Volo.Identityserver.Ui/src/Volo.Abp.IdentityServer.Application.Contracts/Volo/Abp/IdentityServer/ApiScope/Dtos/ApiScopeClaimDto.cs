using System;

namespace Volo.Abp.IdentityServer.ApiScope.Dtos
{
    public class ApiScopeClaimDto
    {
        public Guid ApiScopeId { get; set; }

        public string Type { get; set; }
    }
}
