using System.Linq;
using Volo.Payment.Requests;
using Microsoft.EntityFrameworkCore;

namespace Volo.Payment.EntityFrameworkCore
{
    public static class PaymentEntityFrameworkCoreQueryableExtensions
    {
        public static IQueryable<PaymentRequest> IncludeDetails(this IQueryable<PaymentRequest> queryable, bool include = true)
        {
            if (!include)
            {
                return queryable;
            }

            return queryable
                .Include(x => x.Products);
        }
    }
}
