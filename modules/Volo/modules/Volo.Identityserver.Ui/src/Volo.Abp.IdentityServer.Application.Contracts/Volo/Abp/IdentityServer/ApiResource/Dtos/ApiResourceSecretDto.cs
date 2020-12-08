using System;

namespace Volo.Abp.IdentityServer.ApiResource.Dtos
{
    public class ApiResourceSecretDto
    {
        public virtual Guid ApiResourceId { get; set; }

        public string Type { get; set; }

        public string Value { get; set; }

        public string Description { get; set; }

        public DateTime? Expiration { get; set; }
    }
}
