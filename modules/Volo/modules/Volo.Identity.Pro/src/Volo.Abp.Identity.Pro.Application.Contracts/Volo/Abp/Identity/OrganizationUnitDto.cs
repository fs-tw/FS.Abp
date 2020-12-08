using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.Identity
{
    public class OrganizationUnitDto : ExtensibleFullAuditedEntityDto<Guid>
    {
        public Guid? ParentId { get; set; }
        
        public string Code { get; set; }
        
        public string DisplayName { get; set; }
        
        public List<OrganizationUnitRoleDto> Roles { get; set; }
    }
}
