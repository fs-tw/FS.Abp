using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.EntityFrameworkCore
{
    [ConnectionStringName(AbpDbProperties.ConnectionStringName)]
    public interface IAbpDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}