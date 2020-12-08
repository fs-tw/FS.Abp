using System;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class ClientGrantTypeDto
    {
        public  Guid ClientId { get;  set; }

        public  string GrantType { get;  set; }

    }
}