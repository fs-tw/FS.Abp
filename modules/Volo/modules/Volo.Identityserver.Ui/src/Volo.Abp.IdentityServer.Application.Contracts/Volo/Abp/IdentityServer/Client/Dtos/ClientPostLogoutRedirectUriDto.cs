using System;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class ClientPostLogoutRedirectUriDto
    {
        public virtual Guid ClientId { get; set; }

        public virtual string PostLogoutRedirectUri { get; set; }
    }
}
