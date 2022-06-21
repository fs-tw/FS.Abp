using System;
using System.Threading.Tasks;

namespace FS.Abp.Identity
{
    public interface IIdentityUserManager
    {
        Task ChangeUserClaimsAsync(Func<Task> action, string roleName = "admin");
        Task ChangeUserClaimsAsync(string email, Func<Task> action,string roleName="admin");
    }
}