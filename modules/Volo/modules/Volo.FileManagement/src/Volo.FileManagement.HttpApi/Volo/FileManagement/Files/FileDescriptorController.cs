using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.FileManagement.Authorization;

namespace Volo.FileManagement.Files
{
    [RemoteService(Name = FileManagementRemoteServiceConsts.RemoteServiceName)]
    [Area("fileManagement")]
    [ControllerName("FileDescriptors")]
    [Route("api/file-management/file-descriptor")]
    [Authorize(FileManagementPermissions.FileDescriptor.Default)]
    public class FileDescriptorController : AbpController, IFileDescriptorAppService
    {
        protected IFileDescriptorAppService FileDescriptorAppService { get; }

        public FileDescriptorController(IFileDescriptorAppService fileDescriptorAppService)
        {
            FileDescriptorAppService = fileDescriptorAppService;
        }

        [HttpGet]
        [Route("{id}")]
        public virtual async Task<FileDescriptorDto> GetAsync(Guid id)
        {
            return await FileDescriptorAppService.GetAsync(id);
        }

        [HttpGet]
        public virtual async Task<ListResultDto<FileDescriptorDto>> GetListAsync(Guid? directoryId)
        {
            return await FileDescriptorAppService.GetListAsync(directoryId);
        }

        [HttpPost]
        [Authorize(FileManagementPermissions.FileDescriptor.Create)]
        public virtual async Task<FileDescriptorDto> CreateAsync(CreateFileInput input)
        {
            return await FileDescriptorAppService.CreateAsync(input);
        }

        [HttpPost]
        [Route("move")]
        [Authorize(FileManagementPermissions.FileDescriptor.Update)]
        public virtual async Task<FileDescriptorDto> MoveAsync(MoveFileInput input)
        {
            return await FileDescriptorAppService.MoveAsync(input);
        }

        [HttpPost]
        [Route("pre-upload-info")]
        public virtual async Task<List<FileUploadPreInfoDto>> GetPreInfoAsync(List<FileUploadPreInfoRequest> input)
        {
            return await FileDescriptorAppService.GetPreInfoAsync(input);
        }

        [HttpGet]
        [Route("content")]
        public virtual async Task<byte[]> GetContentAsync(Guid id)
        {
            return await FileDescriptorAppService.GetContentAsync(id);
        }

        [HttpPost]
        [Route("{id}")]
        [Authorize(FileManagementPermissions.FileDescriptor.Update)]
        public virtual async Task<FileDescriptorDto> RenameAsync(Guid id, RenameFileInput input)
        {
            return await FileDescriptorAppService.RenameAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize(FileManagementPermissions.FileDescriptor.Delete)]
        public virtual async Task DeleteAsync(Guid id)
        {
            await FileDescriptorAppService.DeleteAsync(id);
        }

        [HttpPost]
        [Route("upload")]
        [Authorize(FileManagementPermissions.FileDescriptor.Create)]
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual async Task<IActionResult> UploadAsync(Guid? directoryId, IFormFile file)
        {
            if (file == null)
            {
                return BadRequest();
            }

            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);

                var fileDescriptor = await FileDescriptorAppService.CreateAsync(
                    new CreateFileInput
                    {
                        Name = file.FileName,
                        MimeType = file.ContentType,
                        DirectoryId = directoryId,
                        Content = memoryStream.ToArray()
                    }
                );

                return StatusCode(201, fileDescriptor);
            }
        }

        [HttpGet]
        [Route("download/{id}")]
        [ApiExplorerSettings(IgnoreApi = true)]
        public virtual async Task<IActionResult> DownloadAsync(Guid id)
        {
            var fileDescriptor = await FileDescriptorAppService.GetAsync(id);
            var content = await FileDescriptorAppService.GetContentAsync(id);

            return File(content, fileDescriptor.MimeType, fileDescriptor.Name);
        }
    }
}
