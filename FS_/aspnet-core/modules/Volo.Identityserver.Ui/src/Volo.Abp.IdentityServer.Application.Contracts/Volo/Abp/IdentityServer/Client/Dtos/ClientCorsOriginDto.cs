using System;

namespace Volo.Abp.IdentityServer.Client.Dtos
{
    public class ClientCorsOriginDto
    {
        public virtual Guid ClientId { get; set; }

        public virtual string Origin { get; set; }
    }
}
