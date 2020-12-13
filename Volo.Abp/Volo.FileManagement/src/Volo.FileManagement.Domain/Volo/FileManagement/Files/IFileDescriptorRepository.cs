using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp.Domain.Repositories;

namespace Volo.FileManagement.Files
{
    public interface IFileDescriptorRepository : IBasicRepository<FileDescriptor, Guid>
    {
        Task<FileDescriptor> FindAsync([NotNull] string name, Guid? directoryId = null, CancellationToken cancellationToken = default);

        Task<List<FileDescriptor>> GetListAsync(Guid? directoryId, string filter = null, string sorting = null, CancellationToken cancellationToken = default);

        Task<int> CountDirectoryFilesAsync(Guid? directoryId, CancellationToken cancellationToken = default);
        
        Task<long> GetTotalSizeAsync();
    }
}