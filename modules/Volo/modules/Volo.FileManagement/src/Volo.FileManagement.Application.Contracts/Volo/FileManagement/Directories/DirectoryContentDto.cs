using System;
using Volo.FileManagement.Files;

namespace Volo.FileManagement.Directories
{
    public class DirectoryContentDto
    {
        public string Name { get; set; }

        public bool IsDirectory { get; set; }

        public Guid Id { get; set; }
        
        public int Size { get; set; }

        public FileIconInfo IconInfo { get; set; }
    }
}