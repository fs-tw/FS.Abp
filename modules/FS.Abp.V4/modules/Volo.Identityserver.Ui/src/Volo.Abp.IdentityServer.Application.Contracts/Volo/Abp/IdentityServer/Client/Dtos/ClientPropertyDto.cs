using System;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class ClientPropertyDto
    {
        public virtual Guid ClientId { get; set; }

        public virtual string Key { get; set; }

        public virtual string Value { get; set; }
    }
}