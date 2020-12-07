using System;

namespace Volo.FileManagement.Directories
{
    public class MoveDirectoryInput
    {
        public Guid Id { get; set; }

        public Guid? NewParentId { get; set; }
    }
}