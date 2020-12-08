using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Volo.Abp.LanguageManagement
{
    public interface ILanguageRepository : IBasicRepository<Language, Guid>
    {
        Task<List<Language>> GetListAsync(bool isEnabled);

        Task<List<Language>> GetListAsync(
            string sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            string filter = null
            );

        Task<long> GetCountAsync(string filter);
    }
}