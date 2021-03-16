using System;
using System.Collections.Generic;
using System.Text;

namespace FS.Abp.File.Directories.Dtos
{
    public class DirectoryDescriptorDto : Volo.FileManagement.Directories.DirectoryDescriptorDto
    {
        public DirectoryDescriptorDto Parent { get; set; }
    }
}
