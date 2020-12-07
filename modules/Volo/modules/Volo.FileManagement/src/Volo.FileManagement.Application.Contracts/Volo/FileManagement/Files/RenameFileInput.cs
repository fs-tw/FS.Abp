using System.ComponentModel.DataAnnotations;
using Volo.Abp.Validation;

namespace Volo.FileManagement.Files
{
    public class RenameFileInput
    {
        [Required]
        [DynamicStringLength(typeof(FileDescriptorConsts), nameof(FileDescriptorConsts.MaxNameLength))]
        public string Name { get; set; }
    }
}