using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Volo.Abp.Domain.Repositories.MongoDB;
using Volo.Abp.MongoDB;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    public class MongoLanguageRepository : MongoDbRepository<ILanguageManagementMongoDbContext, Language, Guid>, ILanguageRepository
    {
        public MongoLanguageRepository(IMongoDbContextProvider<ILanguageManagementMongoDbContext> dbContextProvider) : base(dbContextProvider)
        {
        }

        public virtual async Task<List<Language>> GetListAsync(bool isEnabled)
        {
            return await GetMongoQueryable().Where(l => l.IsEnabled == isEnabled).ToListAsync();
        }

        public async Task<List<Language>> GetListAsync(
            string sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            string filter = null)
        {
            return await GetMongoQueryable()
                .WhereIf(filter != null,
                    x => x.DisplayName.Contains(filter) ||
                         x.CultureName.Contains(filter))
                .OrderBy(sorting ?? nameof(Language.DisplayName))
                .As<IMongoQueryable<Language>>()
                .PageBy<Language, IMongoQueryable<Language>>(skipCount, maxResultCount)
                .ToListAsync();

        }


        public Task<long> GetCountAsync(string filter)
        {
            var count =  GetMongoQueryable()
                  .WhereIf(filter != null,
                      x => x.DisplayName.Contains(filter) ||
                           x.CultureName.Contains(filter))
                  .Count();
            return Task.FromResult<long>(count);
        }
    }
}