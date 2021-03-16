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
using Volo.Abp.Features;
using Volo.FileManagement.Authorization;

namespace Volo.FileManagement.Files
{

    public class FilesAppService : FileAppService, IFilesAppService
    {
     
        protected IFileManager FileManager { get; }
        protected IFileDescriptorRepository FileDescriptorRepository { get; }
        protected IBlobContainer<FileManagementContainer> BlobContainer { get; }

        public FilesAppService(
            IFileManager fileManager,
            IFileDescriptorRepository fileDescriptorRepository,
            IBlobContainer<FileManagementContainer> blobContainer)
        {
            FileManager = fileManager;
            FileDescriptorRepository = fileDescriptorRepository;
            BlobContainer = blobContainer;
        }

        public virtual async Task<FileDescriptorDto> GetAsync(Guid id)
        {
            var fileDescriptor = await FileDescriptorRepository.GetAsync(id);

            return ObjectMapper.Map<FileDescriptor, FileDescriptorDto>(fileDescriptor);
        }

     
        public virtual async Task<byte[]> GetContentAsync(Guid id)
        {
            return await BlobContainer.GetAllBytesAsync(id.ToString());
        }

      
    }
}
