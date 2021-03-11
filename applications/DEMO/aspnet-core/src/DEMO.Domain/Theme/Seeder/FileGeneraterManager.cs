using Microsoft.AspNetCore.StaticFiles;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.Abp.VirtualFileSystem;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Files;

namespace DEMO.Theme
{
    public class FileGeneraterManager : DomainService
    {
        private readonly IVirtualFileProvider virtualFileProvider;
        private readonly IDirectoryDescriptorRepository directoryDescriptorRepository;
        private readonly IDirectoryManager directoryManager;
        private readonly IFileManager fileManager;

        public FileGeneraterManager(
            IVirtualFileProvider virtualFileProvider,
             IDirectoryDescriptorRepository directoryDescriptorRepository,
            IDirectoryManager directoryManager,
            IFileManager fileManager
            )
        {
            this.virtualFileProvider = virtualFileProvider;
            this.directoryDescriptorRepository = directoryDescriptorRepository;
            this.directoryManager = directoryManager;
            this.fileManager = fileManager;
        }


        public async Task<DirectoryDescriptor> CreateDirectory(string name, Guid? parentId = null, Guid? tenantId = null)
        {
            var directory = await this.directoryManager.CreateAsync(name, parentId, tenantId);
            await this.directoryDescriptorRepository.InsertAsync(directory, true);
            return directory;
        }


        public async Task<FileDescriptor> CreateFile(string filePath, Guid directoryId, Guid? tenantId = null)
        {           
            var file = this.virtualFileProvider.GetFileInfo(filePath);
            if (file.Exists == false) return null;
            var stream = file.CreateReadStream();
            string contentType = "";
            new FileExtensionContentTypeProvider().TryGetContentType(file.Name, out contentType);
            var memoryStream = new MemoryStream();
            stream.CopyTo(memoryStream);
            var fileDescriptor = await fileManager.CreateAsync(file.Name, contentType, memoryStream.ToArray(), directoryId, tenantId);           
            return fileDescriptor;
        }

    }
}
