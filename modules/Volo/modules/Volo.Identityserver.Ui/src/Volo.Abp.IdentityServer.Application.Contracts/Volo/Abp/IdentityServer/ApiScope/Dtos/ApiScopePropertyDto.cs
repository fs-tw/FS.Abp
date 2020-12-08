using System;

namespace Volo.Abp.IdentityServer.ApiScope.Dtos
{
    public class ApiScopePropertyDto
    {
        public Guid ApiScopeId { get; set; }

        public string Key { get; set; }

        public string Value { get; set; }
    }
}
