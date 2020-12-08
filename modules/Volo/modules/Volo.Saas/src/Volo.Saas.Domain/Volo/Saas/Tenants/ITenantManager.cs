using System;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Volo.Abp.Domain.Services;

namespace Volo.Saas.Tenants
{
    public interface ITenantManager : IDomainService
    {
        [NotNull]
        Task<Tenant> CreateAsync([NotNull] string name, Guid? editionId = null);

        Task ChangeNameAsync([NotNull] Tenant tenant, [NotNull] string name);
    }
}
