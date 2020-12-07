using System;

namespace Volo.Abp.Identity
{
    public class OrganizationUnitCreateDto : OrganizationUnitCreateOrUpdateDtoBase
    {
        public Guid? ParentId { get; set; }
    }
}
