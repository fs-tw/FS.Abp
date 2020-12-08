using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Math.EC.Rfc7748;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace Volo.Abp.LanguageManagement.EntityFrameworkCore
{
    public class EfCoreLanguageRepository : EfCoreRepository<ILanguageManagementDbContext, Language, Guid>, ILanguageRepository
    {
        public EfCoreLanguageRepository(IDbContextProvider<ILanguageManagementDbContext> dbContextProvider)
            : base(dbContextProvider)
        {
        }

        public virtual async Task<List<Language>> GetListAsync(bool isEnabled)
        {
            return await DbSet.Where(l => l.IsEnabled == isEnabled).ToListAsync();
        }

        public async Task<List<Language>> GetListAsync(
            string sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            string filter = null)
        {
            return await GetQueryable()
                .WhereIf(filter != null,
                    x => x.DisplayName.Contains(filter) || 
                    x.CultureName.Contains(filter))
                .OrderBy(sorting ?? nameof(Language.DisplayName))
                .PageBy(skipCount, maxResultCount)
                .ToListAsync();
        }

        public async Task<long> GetCountAsync(string filter)
        {
            return await GetQueryable()
                .WhereIf(filter != null,
                    x => x.DisplayName.Contains(filter) ||
                    x.CultureName.Contains(filter))
                .CountAsync();
        }
    }
}
