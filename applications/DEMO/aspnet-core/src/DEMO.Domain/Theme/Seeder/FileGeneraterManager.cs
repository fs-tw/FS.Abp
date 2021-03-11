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
    public enum PathType 
    {
        base64,FilePath
    }
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


        public async Task<FileDescriptor> CreateFileFromBase64(string input, Guid directoryId,string fileName, Guid? tenantId = null)
        {
            var memoryStream = new MemoryStream();
            string contentType = "";
            var temp = input.Split(",");
            var base64 = temp.Last();
            contentType = temp.First().Replace("data:", "").Replace(";base64", "");
            var bytes = Convert.FromBase64String(base64);
            memoryStream.Write(bytes);
            var fileDescriptor = await fileManager.CreateAsync(fileName, contentType, memoryStream.ToArray(), directoryId, tenantId);           
            return fileDescriptor;
        }


       

    }
}
