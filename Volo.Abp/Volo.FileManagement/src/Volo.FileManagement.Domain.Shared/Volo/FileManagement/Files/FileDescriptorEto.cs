using System;

namespace Volo.FileManagement.Files
{
    [Serializable]
    public class FileDescriptorEto
    {
        public Guid Id { get; set; }

        public Guid? TenantId { get; set; }

        public Guid? DirectoryId { get; set; }

        public string Name { get; set; }

        public string MimeType { get; set; }

        public int Size { get; set; }
    }
}