using System;

namespace Volo.Abp.IdentityServer.ApiResource.Dtos
{
    public class ApiResourceScopeDto
    {
        public Guid ApiResourceId { get; set; }

        public string Scope { get; set; }
    }
}
