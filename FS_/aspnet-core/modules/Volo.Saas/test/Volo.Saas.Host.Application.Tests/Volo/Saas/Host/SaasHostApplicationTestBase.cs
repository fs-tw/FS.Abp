using System;
using Volo.Saas.EntityFrameworkCore;

namespace Volo.Saas.Host
{
    public abstract class SaasHostApplicationTestBase : SaasTestBase<SaasHostApplicationTestModule>
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
