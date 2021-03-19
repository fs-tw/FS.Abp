using System;
using System.Threading.Tasks;
using Volo.FileManagement.Files;

namespace FS.Abp.File.Files
{
    public interface IFilesAppService
    {
        Task<FileDescriptorDto> GetAsync(Guid id);
        Task<byte[]> GetContentAsync(Guid id);
    }
}