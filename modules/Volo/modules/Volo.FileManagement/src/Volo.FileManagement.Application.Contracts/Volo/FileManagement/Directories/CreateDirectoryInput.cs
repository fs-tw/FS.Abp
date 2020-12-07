using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Validation;

namespace Volo.FileManagement.Directories
{
    public class CreateDirectoryInput
    {
        public Guid? ParentId { get; set; }

        [Required]
        [DynamicStringLength(typeof(DirectoryDescriptorConsts), nameof(DirectoryDescriptorConsts.MaxNameLength))]
        public string Name { get; set; }
    }
}