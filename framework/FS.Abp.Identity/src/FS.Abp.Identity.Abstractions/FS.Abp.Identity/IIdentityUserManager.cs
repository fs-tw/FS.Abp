using System;
using System.Threading.Tasks;

namespace FS.Abp.Identity
{
    public interface IIdentityUserManager
    {
        Task ChangeTenantClaimsAsync(Guid? tenantId, Func<Task> action);
        Task ChangeTenantClaimsAsync(Guid? tenantId, string email, Func<Task> action);
    }
}