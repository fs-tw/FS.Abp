using System.ComponentModel.DataAnnotations;
using Volo.Abp.Validation;

namespace Volo.FileManagement.Directories
{
    public class RenameDirectoryInput
    {
        [Required]
        [DynamicStringLength(typeof(DirectoryDescriptorConsts), nameof(DirectoryDescriptorConsts.MaxNameLength))]
        public string Name { get; set; }
    }
}