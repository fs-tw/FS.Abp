using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Theme.TheProject.EntityFrameworkCore
{
    [ConnectionStringName(TheProjectDbProperties.ConnectionStringName)]
    public interface ITheProjectDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}