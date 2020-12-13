using System;

namespace Volo.FileManagement.Files
{
    public class MoveFileInput
    {
        public Guid Id { get; set; }

        public Guid? NewDirectoryId { get; set; }
    }
}