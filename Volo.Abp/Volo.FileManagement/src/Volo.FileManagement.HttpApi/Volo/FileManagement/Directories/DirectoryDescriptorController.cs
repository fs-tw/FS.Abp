using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.FileManagement.Authorization;

namespace Volo.FileManagement.Directories
{
    [RemoteService(Name = FileManagementRemoteServiceConsts.RemoteServiceName)]
    [Area("fileManagement")]
    [ControllerName("DirectoryDescriptors")]
    [Route("api/file-management/directory-descriptor")]
    [Authorize(FileManagementPermissions.DirectoryDescriptor.Default)]
    public class DirectoryDescriptorController : AbpController, IDirectoryDescriptorAppService
    {
        protected IDirectoryDescriptorAppService DirectoryDescriptorAppService { get; }
        
        public DirectoryDescriptorController(IDirectoryDescriptorAppService directoryDescriptorAppService)
        {
            DirectoryDescriptorAppService = directoryDescriptorAppService;
        }

        [HttpGet]
        [Route("{id}")]
        public virtual async Task<DirectoryDescriptorDto> GetAsync(Guid id)
        {
            return await DirectoryDescriptorAppService.GetAsync(id);
        }

        [HttpGet]
        [Route("sub-directories")]
        public virtual async Task<ListResultDto<DirectoryDescriptorInfoDto>> GetListAsync(Guid? parentId)
        {
            return await DirectoryDescriptorAppService.GetListAsync(parentId);
        }

        [HttpPost]
        [Authorize(FileManagementPermissions.DirectoryDescriptor.Create)]
        public virtual async Task<DirectoryDescriptorDto> CreateAsync(CreateDirectoryInput input)
        {
            return await DirectoryDescriptorAppService.CreateAsync(input);
        }
        
        [HttpPost]
        [Route("{id}")]
        [Authorize(FileManagementPermissions.DirectoryDescriptor.Update)]
        public virtual async Task<DirectoryDescriptorDto> RenameAsync(Guid id, RenameDirectoryInput input)
        {
            return await DirectoryDescriptorAppService.RenameAsync(id, input);
        }
        
        [HttpGet]
        public virtual async Task<PagedResultDto<DirectoryContentDto>> GetContentAsync(DirectoryContentRequestInput input)
        {
            return await DirectoryDescriptorAppService.GetContentAsync(input);
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(FileManagementPermissions.DirectoryDescriptor.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await DirectoryDescriptorAppService.DeleteAsync(id);
        }
        
        [HttpPost]
        [Route("move")]
        [Authorize(FileManagementPermissions.DirectoryDescriptor.Update)]
        public virtual async Task<DirectoryDescriptorDto> MoveAsync(MoveDirectoryInput input)
        {
            return await DirectoryDescriptorAppService.MoveAsync(input);
        }
    }
}