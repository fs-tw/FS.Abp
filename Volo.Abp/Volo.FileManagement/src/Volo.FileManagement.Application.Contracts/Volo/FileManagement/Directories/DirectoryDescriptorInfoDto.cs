using System;
using System.Collections.Generic;

namespace Volo.FileManagement.Directories
{
    public class DirectoryDescriptorInfoDto
    {
        public Guid Id { get; set; }
        
        public string Name { get; set; }

        public Guid? ParentId { get; set; }
        
        public bool HasChildren { get; set; }
    }
}