using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.FileManagement.Files
{
    public interface IFileDescriptorAppService : IApplicationService
    {
        Task<FileDescriptorDto> GetAsync(Guid id);
        
        Task<ListResultDto<FileDescriptorDto>> GetListAsync(Guid? directoryId);

        Task<FileDescriptorDto> RenameAsync(Guid id, RenameFileInput input);

        Task DeleteAsync(Guid id);

        Task<FileDescriptorDto> CreateAsync(CreateFileInput input);

        Task<FileDescriptorDto> MoveAsync(MoveFileInput input);

        Task<List<FileUploadPreInfoDto>> GetPreInfoAsync(List<FileUploadPreInfoRequest> input);
        
        Task<byte[]> GetContentAsync(Guid id);
    }
}