using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Localization;
using Volo.Abp.Domain.Services;
using Volo.FileManagement.Files;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement.Directories
{
    public class DirectoryManager : DomainService, IDirectoryManager
    {
        protected IDirectoryDescriptorRepository DirectoryDescriptorRepository { get; }

        protected IFileManager FileManager { get; }

        public DirectoryManager(
            IDirectoryDescriptorRepository directoryDescriptorRepository, 
            IFileManager fileManager)
        {
            DirectoryDescriptorRepository = directoryDescriptorRepository;
            FileManager = fileManager;
        }

        public virtual async Task<DirectoryDescriptor> CreateAsync(string name, Guid? parentId = null, Guid? tenantId = null)
        {
            var directoryDescriptor = await DirectoryDescriptorRepository.FindAsync(name, parentId);
            if (directoryDescriptor != null)
            {
                throw new DirectoryAlreadyExistException(name);
            }

            return new DirectoryDescriptor(GuidGenerator.Create(), name, parentId, tenantId);
        }

        public virtual async Task RenameAsync(DirectoryDescriptor directory, string newName)
        {
            if (directory.Name == newName)
            {
                return;
            }

            await CheckTargetDirectory(directory.ParentId, newName);

            directory.SetName(newName);
        }

        public virtual async Task MoveAsync(DirectoryDescriptor directory, Guid? newParentId)
        {
            if (directory.ParentId == newParentId)
            {
                return;
            }

            await CheckTargetDirectory(newParentId, directory.Name);
            
            // Parent directory validation
            if (!(await IsMovableToAsync(directory, newParentId)))
            {
                throw new InvalidMoveException();
            }

            directory.ParentId = newParentId;
        }

        public virtual async Task DeleteAsync(Guid id)
        {
            var allSubDirectoryIds = await DirectoryDescriptorRepository.GetAllChildrenIdsAsync(id, CancellationToken.None);

            foreach (var directoryId in allSubDirectoryIds)
            {
                await DeleteAsync(directoryId);
            }

            await FileManager.DeleteAllAsync(id);
            await DirectoryDescriptorRepository.DeleteAsync(id, cancellationToken: CancellationToken.None);
        }

        protected virtual async Task<bool> IsMovableToAsync(DirectoryDescriptor directory, Guid? parentId = null)
        {
            if (parentId == null)
            {
                return true;
            }

            return !(await IsParentOfAsync(directory.Id, parentId.Value));
        }

        protected virtual async Task<bool> IsParentOfAsync(Guid parentId, Guid childId)
        {
            var directory = await DirectoryDescriptorRepository.GetAsync(childId);

            while (directory.ParentId != null)
            {
                if (parentId == directory.ParentId)
                {
                    return true;
                }

                directory = await DirectoryDescriptorRepository.GetAsync(directory.ParentId.Value);
            }

            return false;
        }
        
        protected virtual async Task CheckTargetDirectory(Guid? parentId, string name)
        {
            var targetDirectory = await DirectoryDescriptorRepository.FindAsync(name, parentId);
            if (targetDirectory != null)
            {
                throw new DirectoryAlreadyExistException(name);
            }
        }
    }
}