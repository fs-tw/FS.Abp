using System;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class ClientIdentityProviderRestrictionDto
    {
        public Guid ClientId { get; set; }

        public string Provider { get; set; }
    }
}