using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Entity.EntityDefaults.EntityFrameworkCore
{
    [ConnectionStringName(EntityDefaultsDbProperties.ConnectionStringName)]
    public partial interface IEntityDefaultsDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}


