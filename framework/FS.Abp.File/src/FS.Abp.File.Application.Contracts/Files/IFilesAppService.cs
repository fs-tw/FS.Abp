using System;
using System.Threading.Tasks;
using Volo.Abp.Content;

namespace Volo.FileManagement.Files
{
    public interface IFilesAppService
    {      
        Task<FileDescriptorDto> GetAsync(Guid id);
        Task<byte[]> GetContentAsync(Guid id);
    }
}