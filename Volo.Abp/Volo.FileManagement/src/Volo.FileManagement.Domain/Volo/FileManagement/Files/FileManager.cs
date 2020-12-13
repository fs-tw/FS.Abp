using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Localization;
using Volo.Abp;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Services;
using Volo.Abp.Guids;
using Volo.FileManagement.Directories;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement.Files
{
    public class FileManager : DomainService, IFileManager
    {
        protected IFileDescriptorRepository FileDescriptorRepository { get; }
        protected IDirectoryDescriptorRepository DirectoryDescriptorRepository { get; }
        protected IBlobContainer<FileManagementContainer> BlobContainer { get; }
        
        public FileManager(
            IFileDescriptorRepository fileDescriptorRepository, 
            IBlobContainer<FileManagementContainer> blobContainer,
            IDirectoryDescriptorRepository directoryDescriptorRepository)
        {
            FileDescriptorRepository = fileDescriptorRepository;
            BlobContainer = blobContainer;
            DirectoryDescriptorRepository = directoryDescriptorRepository;
        }

        public virtual async Task<FileDescriptor> CreateAsync(
            string name,
            string mimeType,
            byte[] content,
            Guid? directoryId = null,
            Guid? tenantId = null,
            bool overrideExisting = false)
        {
            var fileDescriptor = await FileDescriptorRepository.FindAsync(name, directoryId);

            if (fileDescriptor != null)
            {
                if (!overrideExisting)
                {
                    throw new FileAlreadyExistException(name);
                }
                
                fileDescriptor.Size = content.Length;
                await FileDescriptorRepository.UpdateAsync(fileDescriptor);
            }
            else
            {
                fileDescriptor = new FileDescriptor(GuidGenerator.Create(), name, mimeType, directoryId, content.Length, tenantId);
                await FileDescriptorRepository.InsertAsync(fileDescriptor);
            }
            
            await BlobContainer.SaveAsync(fileDescriptor.Id.ToString(), content, true);
            
            return fileDescriptor;
        }

        public virtual async Task RenameAsync(FileDescriptor file, string newName)
        {
            var existingFile = await FileDescriptorRepository.FindAsync(newName, file.DirectoryId);
            if (existingFile != null)
            {
                throw new FileAlreadyExistException(newName);
            }
            
            file.SetName(newName);
        }

        public virtual async Task DeleteAllAsync(Guid? directoryId)
        {
            foreach (var file in await FileDescriptorRepository.GetListAsync(directoryId))
            {
                await DeleteAsync(file);
            }
        }

        public virtual async Task DeleteAsync(FileDescriptor file)
        {
            await BlobContainer.DeleteAsync(file.Id.ToString());
            await FileDescriptorRepository.DeleteAsync(file, cancellationToken: CancellationToken.None);
        }

        public virtual async Task MoveAsync(FileDescriptor file, Guid? newDirectoryId)
        {
            if (newDirectoryId.HasValue)
            {
                if (await DirectoryDescriptorRepository.FindAsync(newDirectoryId.Value) == null)
                {
                    throw new DirectoryNotExistException();
                }
            }

            file.DirectoryId = newDirectoryId;
        }
    }
}