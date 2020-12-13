using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;
using Volo.FileManagement.MongoDB;

namespace Volo.FileManagement.Files
{
    public class MongoDbFileDescriptorRepository : MongoDbRepository<IFileManagementMongoDbContext, FileDescriptor, Guid>, IFileDescriptorRepository
    {
        public MongoDbFileDescriptorRepository(IMongoDbContextProvider<IFileManagementMongoDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public virtual async Task<FileDescriptor> FindAsync(string name, Guid? directoryId = null, CancellationToken cancellationToken = default)
        {
            return await base.FindAsync(x => x.Name == name && x.DirectoryId == directoryId, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<List<FileDescriptor>> GetListAsync(
            Guid? directoryId,
            string filter = null,
            string sorting = null,
            CancellationToken cancellationToken = default)
        {
            return await GetMongoQueryable()
                .WhereIf(!string.IsNullOrWhiteSpace(filter), x => x.Name.Contains(filter))
                .Where(x => x.DirectoryId == directoryId)
                .OrderBy(sorting ?? FileDescriptorConsts.DefaultSorting)
                .As<IMongoQueryable<FileDescriptor>>()
                .ToListAsync(GetCancellationToken(cancellationToken));
        }

        public virtual async Task<int> CountDirectoryFilesAsync(Guid? directoryId, CancellationToken cancellationToken = default)
        {
            return await GetMongoQueryable().Where(x => x.DirectoryId == directoryId).CountAsync(GetCancellationToken(cancellationToken));
        }

        public virtual async Task<long> GetTotalSizeAsync()
        {
            return await GetMongoQueryable().Select(x => x.Size).SumAsync();
        }
    }
}