using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Authentication.EntityFrameworkCore
{
    [ConnectionStringName(AuthenticationDbProperties.ConnectionStringName)]
    public interface IAuthenticationDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}