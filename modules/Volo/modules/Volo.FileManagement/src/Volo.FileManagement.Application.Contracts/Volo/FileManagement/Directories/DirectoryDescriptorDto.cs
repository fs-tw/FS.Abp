using System;
using Volo.Abp.Application.Dtos;

namespace Volo.FileManagement.Directories
{
    public class DirectoryDescriptorDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }

        public Guid? ParentId { get; set; }
    }
}