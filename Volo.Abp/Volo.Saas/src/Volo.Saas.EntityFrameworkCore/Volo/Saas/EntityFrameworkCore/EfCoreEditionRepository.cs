using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Saas.Editions;

namespace Volo.Saas.EntityFrameworkCore
{
    public class EfCoreEditionRepository : EfCoreRepository<ISaasDbContext, Edition, Guid>, IEditionRepository
    {
        public EfCoreEditionRepository(IDbContextProvider<ISaasDbContext> dbContextProvider)
            : base(dbContextProvider)
        {

        }

        public virtual async Task<List<Edition>> GetListAsync(
            string sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            string filter = null,
            bool includeDetails = false,
            CancellationToken cancellationToken = default)
        {
            return await DbSet
                .WhereIf(!filter.IsNullOrWhiteSpace(), u => u.DisplayName.Contains(filter))
                .OrderBy(sorting ?? nameof(Edition.DisplayName))
                .PageBy(skipCount, maxResultCount)
                .ToListAsync(GetCancellationToken(cancellationToken));
        }

        public virtual async Task<int> GetCountAsync(
            string filter,
            CancellationToken cancellationToken = default)
        {
            return await DbSet
                .WhereIf(!filter.IsNullOrWhiteSpace(), u => u.DisplayName.Contains(filter))
                .CountAsync(GetCancellationToken(cancellationToken));
        }

        public virtual async Task<bool> CheckNameExistAsync(string displayName, CancellationToken cancellationToken = default)
        {
            return await DbSet.Where(e => e.DisplayName == displayName)
                .AnyAsync(GetCancellationToken(cancellationToken));
        }
    }
}
