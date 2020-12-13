using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Validation;

namespace Volo.FileManagement.Files
{
    public class CreateFileInput
    {
        public Guid? DirectoryId { get; set; }

        [Required]
        [DynamicStringLength(typeof(FileDescriptorConsts), nameof(FileDescriptorConsts.MaxNameLength))]
        public string Name { get; set; }

        [Required]
        [DynamicStringLength(typeof(FileDescriptorConsts), nameof(FileDescriptorConsts.MaxMimeTypeLength))]
        public string MimeType { get; set; }
        
        public byte[] Content { get; set; }
    }
}