using System;
using Volo.Abp.Application.Dtos;

namespace Volo.Abp.Identity
{
    public class OrganizationUnitRoleDto : CreationAuditedEntityDto
    {
        public Guid OrganizationUnitId { get; set; }
        
        public Guid RoleId { get; set; }
    }
}
