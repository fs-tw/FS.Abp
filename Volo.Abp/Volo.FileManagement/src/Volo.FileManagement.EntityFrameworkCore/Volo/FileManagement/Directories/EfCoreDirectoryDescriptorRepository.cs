using System;
using System.Collections.Generic;
using System.Linq.Dynamic.Core;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.FileManagement.EntityFrameworkCore;

namespace Volo.FileManagement.Directories
{
    public class EfCoreDirectoryDescriptorRepository : EfCoreRepository<IFileManagementDbContext, DirectoryDescriptor, Guid>, IDirectoryDescriptorRepository
    {
        public EfCoreDirectoryDescriptorRepository(IDbContextProvider<IFileManagementDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public virtual async Task<DirectoryDescriptor> FindAsync(string name, Guid? parentId = null, CancellationToken cancellationToken = default)
        {
            return await base.FindAsync(x => x.Name == name && x.ParentId == parentId, cancellationToken: GetCancellationToken(cancellationToken));
        }

        public virtual async Task<int> GetChildrenCountAsync(Guid? parentId, CancellationToken cancellationToken = default)
        {
            return await DbSet.Where(x => x.ParentId == parentId).CountAsync(GetCancellationToken(cancellationToken));
        }

        public virtual async Task<bool> ContainsAnyAsync(Guid? id, bool checkFilesAlso = true, CancellationToken cancellationToken = default)
        {
            var containsDirectory = await DbSet.AnyAsync(x => x.ParentId == id, GetCancellationToken(cancellationToken));

            if (!checkFilesAlso)
            {
                return containsDirectory;
            }

            var containsFile = await DbContext.FileDescriptions.AnyAsync(x => x.DirectoryId == id, GetCancellationToken(cancellationToken));
            
            return containsDirectory || containsFile;
        }

        public virtual async Task<List<DirectoryDescriptor>> GetChildrenAsync(
            Guid? parentId, 
            string filter = null, 
            string sorting = null, 
            CancellationToken cancellationToken = default)
        {
            var directoryDescriptors = 
                await DbSet.Where(x => x.ParentId == parentId)
                .WhereIf(!string.IsNullOrWhiteSpace(filter), x => x.Name.Contains(filter))
                .OrderBy(sorting ?? DirectoryDescriptorConsts.DefaultSorting)
                .ToListAsync(GetCancellationToken(cancellationToken));

            return directoryDescriptors;
        }

       public virtual async Task<List<Guid>> GetAllChildrenIdsAsync(Guid? id, CancellationToken cancellationToken = default)
        {
            var allSubDirectoryIds = new List<Guid>();
            
            var subDirectoryIds = await DbSet.Where(x => x.ParentId == id).Select(x => x.Id).ToListAsync(GetCancellationToken(cancellationToken));
            
            allSubDirectoryIds.AddRange(subDirectoryIds);

            foreach (var subDirectoryId in subDirectoryIds)
            {
                allSubDirectoryIds.AddRange(await GetAllChildrenIdsAsync(subDirectoryId, cancellationToken));
            }

            return allSubDirectoryIds;
        }
        
        public virtual async Task<List<DirectoryDescriptor>> GetAllChildrenAsync(Guid? id, CancellationToken cancellationToken = default)
        {
            var allSubDirectories = new List<DirectoryDescriptor>();
            
            var subDirectories = await DbSet.Where(x => x.ParentId == id).ToListAsync(GetCancellationToken(cancellationToken));
            
            allSubDirectories.AddRange(subDirectories);

            foreach (var subDirectory in subDirectories)
            {
                allSubDirectories.AddRange(await GetAllChildrenAsync(subDirectory.Id, cancellationToken));
            }

            return allSubDirectories;
        }
    }
}