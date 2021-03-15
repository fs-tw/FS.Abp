using System;
using System.Threading.Tasks;
using Volo.Abp.Content;

namespace Volo.FileManagement.Files
{
    public interface IFilesAppService
    {
        Task<RemoteStreamContent> DownloadAsync(Guid id);
        Task<FileDescriptorDto> GetAsync(Guid id);
        Task<byte[]> GetContentAsync(Guid id);
    }
}