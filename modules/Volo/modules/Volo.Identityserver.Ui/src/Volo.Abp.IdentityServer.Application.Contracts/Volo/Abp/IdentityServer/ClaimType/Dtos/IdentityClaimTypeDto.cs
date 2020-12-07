using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.IdentityServer.ClaimType.Dtos
{
    public class IdentityClaimTypeDto : ExtensibleEntityDto<Guid>
    {
        public string Name { get; set; }
    }
}