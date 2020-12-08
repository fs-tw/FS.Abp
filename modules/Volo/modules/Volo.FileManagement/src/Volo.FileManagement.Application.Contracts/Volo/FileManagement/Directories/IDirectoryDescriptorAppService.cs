using System;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.FileManagement.Directories
{
    public interface IDirectoryDescriptorAppService : IApplicationService
    {
        Task<DirectoryDescriptorDto> GetAsync(Guid id);

        Task<ListResultDto<DirectoryDescriptorInfoDto>> GetListAsync(Guid? parentId);
        
        Task<DirectoryDescriptorDto> CreateAsync(CreateDirectoryInput input);

        Task<DirectoryDescriptorDto> RenameAsync(Guid id, RenameDirectoryInput input);
        
        Task<PagedResultDto<DirectoryContentDto>> GetContentAsync(DirectoryContentRequestInput input);

        Task DeleteAsync(Guid id);

        Task<DirectoryDescriptorDto> MoveAsync(MoveDirectoryInput input);
    }
}