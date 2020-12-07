using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using MongoDB.Driver.Linq;
using System.Linq;
using MongoDB.Driver;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;
using Volo.Saas.Editions;

namespace Volo.Saas.MongoDB
{
    public class MongoEditionRepository : MongoDbRepository<ISaasMongoDbContext, Edition, Guid>, IEditionRepository
    {
        public MongoEditionRepository(IMongoDbContextProvider<ISaasMongoDbContext> dbContextProvider)
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
            return await GetMongoQueryable()
                    .WhereIf(!filter.IsNullOrWhiteSpace(), u => u.DisplayName.Contains(filter))
                    .As<IMongoQueryable<Edition>>()
                    .PageBy<Edition, IMongoQueryable<Edition>>(skipCount, maxResultCount)
                    .ToListAsync(GetCancellationToken(cancellationToken));
        }

        public virtual async Task<int> GetCountAsync(
            string filter,
            CancellationToken cancellationToken = default)
        {
            return await GetMongoQueryable()
                .WhereIf(!filter.IsNullOrWhiteSpace(), u => u.DisplayName.Contains(filter))
                .As<IMongoQueryable<Edition>>()
                .CountAsync(GetCancellationToken(cancellationToken));
        }

        public virtual async Task<bool> CheckNameExistAsync(string displayName, CancellationToken cancellationToken = default)
        {
            return await GetMongoQueryable().Where(e => e.DisplayName == displayName)
                .AnyAsync(GetCancellationToken(cancellationToken));
        }
    }
}
