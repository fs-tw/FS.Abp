using System;
using Volo.Saas.EntityFrameworkCore;

namespace Volo.Saas.Tenant
{
    public abstract class SaasTenantApplicationTestBase : SaasTestBase<SaasTenantApplicationTestModule>
    {
        protected virtual void UsingDbContext(Action<ISaasDbContext> action)
        {
            using (var dbContext = GetRequiredService<ISaasDbContext>())
            {
                action.Invoke(dbContext);
            }
        }

        protected virtual T UsingDbContext<T>(Func<ISaasDbContext, T> action)
        {
            using (var dbContext = GetRequiredService<ISaasDbContext>())
            {
                return action.Invoke(dbContext);
            }
        }
    }
}
