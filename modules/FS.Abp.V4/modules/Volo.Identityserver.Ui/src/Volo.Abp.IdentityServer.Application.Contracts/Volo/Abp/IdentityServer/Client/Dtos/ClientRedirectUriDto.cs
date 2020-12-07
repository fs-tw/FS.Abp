using System;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class ClientRedirectUriDto
    {
        public virtual Guid ClientId { get; set; }

        public virtual string RedirectUri { get; set; }
    }
}
