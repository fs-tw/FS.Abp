using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Volo.Saas.Editions
{
    public interface IEditionRepository : IBasicRepository<Edition, Guid>
    {
        Task<List<Edition>> GetListAsync(
            string sorting = null,
            int maxResultCount = int.MaxValue,
            int skipCount = 0,
            string filter = null,
            bool includeDetails = false,
            CancellationToken cancellationToken = default
        );

        Task<int> GetCountAsync(
            string filter,
            CancellationToken cancellationToken = default
        );

        Task<bool> CheckNameExistAsync(
            string displayName,
            CancellationToken cancellationToken = default
        );
    }
}
