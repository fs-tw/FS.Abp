using System;

namespace Volo.Abp.IdentityServer.IdentityResource.Dtos
{
    public class IdentityResourcePropertyDto
    {
        public Guid IdentityResourceId { get; set; }

        public string Key { get; set; }

        public string Value { get; set; }
    }
}
