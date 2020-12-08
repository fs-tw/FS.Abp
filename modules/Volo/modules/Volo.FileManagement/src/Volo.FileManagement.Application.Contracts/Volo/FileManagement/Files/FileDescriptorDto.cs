using System;
using Volo.Abp.Application.Dtos;

namespace Volo.FileManagement.Files
{
    public class FileDescriptorDto : AuditedEntityDto<Guid>
    {
        public Guid? DirectoryId { get; set; }

        public string Name { get; set; }
        
        public string MimeType { get; set; }

        public int Size { get; set; }
    }
}