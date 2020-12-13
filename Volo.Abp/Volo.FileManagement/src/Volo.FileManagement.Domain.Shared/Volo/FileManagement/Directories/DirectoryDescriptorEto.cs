using System;

namespace Volo.FileManagement.Directories
{
    [Serializable]
    public class DirectoryDescriptorEto
    {
        public Guid Id { get; set; }

        public Guid? TenantId { get; set; }
        
        public string Name { get; set; }

        public Guid? ParentId { get; set; }
    }
}