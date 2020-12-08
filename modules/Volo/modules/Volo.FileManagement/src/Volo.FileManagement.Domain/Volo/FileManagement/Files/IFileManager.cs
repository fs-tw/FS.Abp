using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Services;

namespace Volo.FileManagement.Files
{
    public interface IFileManager : IDomainService
    {
        Task<FileDescriptor> CreateAsync(
            [NotNull] string name,
            [NotNull] string mimeType,
            [NotNull] byte[] content,
            Guid? directoryId = null,
            Guid? tenantId = null,
            bool overrideExisting = false);

        Task RenameAsync(FileDescriptor file, [NotNull] string newName);

        Task DeleteAllAsync(Guid? directoryId);

        Task DeleteAsync(FileDescriptor id);

        Task MoveAsync(FileDescriptor file, Guid? newDirectoryId);
    }
}