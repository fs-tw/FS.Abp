using System;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp.Domain.Services;

namespace Volo.FileManagement.Directories
{
    public interface IDirectoryManager : IDomainService
    {
        Task<DirectoryDescriptor> CreateAsync([NotNull] string name, Guid? parentId = null, Guid? tenantId = null);

        Task RenameAsync(DirectoryDescriptor directory, string newName);

        Task MoveAsync(DirectoryDescriptor directory, Guid? newParentId);

        Task DeleteAsync(Guid id);
    }
}