using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.LineNotify.EntityFrameworkCore
{
    [ConnectionStringName(LineNotifyDbProperties.ConnectionStringName)]
    public interface ILineNotifyDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}