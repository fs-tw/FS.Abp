using System;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class ClientScopeDto
    {
        public  Guid ClientId { get;  set; }

        public  string Scope { get;  set; }
    }
}