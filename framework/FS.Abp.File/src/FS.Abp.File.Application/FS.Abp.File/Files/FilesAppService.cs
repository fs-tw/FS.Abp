using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.BlobStoring;
using Volo.FileManagement;
using Volo.FileManagement.Files;

namespace FS.Abp.File.Files
{
    public class FilesAppService : FileAppService, IFilesAppService
    {
        private readonly IBlobContainer<FileManagementContainer> blobContainer;
        public IFileDescriptorRepository fileDescriptorRepository;
        public FilesAppService(
            IFileDescriptorRepository fileDescriptorRepository,
            IBlobContainer<FileManagementContainer> blobContainer
            )
        {
            this.fileDescriptorRepository = fileDescriptorRepository;
            this.blobContainer = blobContainer;
        }



        public async Task<FileDescriptorDto> GetAsync(Guid id)
        {
            var entity = await this.fileDescriptorRepository.GetAsync(id);
            return ObjectMapper.Map<FileDescriptor, FileDescriptorDto>(entity);
        }

        public virtual async Task<byte[]> GetContentAsync(Guid id)
        {
            return await blobContainer.GetAllBytesAsync(id.ToString());
        }
    }
}
