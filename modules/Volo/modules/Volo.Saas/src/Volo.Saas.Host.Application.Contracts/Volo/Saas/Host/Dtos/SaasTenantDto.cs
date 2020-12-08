using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Saas.Host.Dtos
{
    //TODO: No need to SaaS prefixes for the DTOs (consider to change with v3.0 as a breaking change)
    public class SaasTenantDto : ExtensibleEntityDto<Guid>
    {
        public string Name { get; set; }

        public Guid? EditionId { get; set; }

        public string EditionName { get; set; }
    }
}
