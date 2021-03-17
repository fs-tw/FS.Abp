using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FS.Abp.File;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.BlobStoring;
using Volo.Abp.Content;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Features;
using Volo.FileManagement;
using Volo.FileManagement.Authorization;
using Volo.FileManagement.Files;

namespace FS.FileManagement.Files
{
    //[Authorize(null)]
    //[Dependency(ReplaceServices =true)]
    //[ExposeServices(typeof(IFileDescriptorAppService))]
    
    [Authorize(policy: null)]
    public class FileDescriptorAppService :
        //Volo.Abp.Application.Services.ApplicationService,
        Volo.FileManagement.Files.FileDescriptorAppService,
        Volo.FileManagement.Files.IFileDescriptorAppService
    {
        public FileDescriptorAppService(
            IFileManager fileManager,
            IFileDescriptorRepository fileDescriptorRepository,
            IBlobContainer<FileManagementContainer> blobContainer)
            : base(fileManager, fileDescriptorRepository, blobContainer)
        {
        }
        public override Task<FileDescriptorDto> GetAsync(Guid id)
        {
            return base.GetAsync(id);
        }
        //public Task<FileDescriptorDto> CreateAsync(CreateFileInput input)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task DeleteAsync(Guid id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<RemoteStreamContent> DownloadAsync(Guid id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<FileDescriptorDto> GetAsync(Guid id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<byte[]> GetContentAsync(Guid id)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<ListResultDto<FileDescriptorDto>> GetListAsync(Guid? directoryId)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<List<FileUploadPreInfoDto>> GetPreInfoAsync(List<FileUploadPreInfoRequest> input)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<FileDescriptorDto> MoveAsync(MoveFileInput input)
        //{
        //    throw new NotImplementedException();
        //}

        //public Task<FileDescriptorDto> RenameAsync(Guid id, RenameFileInput input)
        //{
        //    throw new NotImplementedException();
        //}
    }
}
