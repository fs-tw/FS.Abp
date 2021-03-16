using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace FS.Abp.File.Directories.Dtos
{
    public class DirectoryDescriptorDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }
        public Guid? ParentId { get; set; }
        public DirectoryDescriptorDto Parent { get; set; }
    }
}
