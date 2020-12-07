using System.Linq;
using Microsoft.EntityFrameworkCore;
using Volo.Saas.Tenants;

namespace Volo.Saas.EntityFrameworkCore
{
    public static class SaasEfCoreQueryableExtensions
    {
        public static IQueryable<Tenant> IncludeDetails(this IQueryable<Tenant> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }

            return queryable
                .Include(x => x.ConnectionStrings);
        }
    }
}
