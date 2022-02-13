using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Entity.MultiLinguals.EntityFrameworkCore
{
    [ConnectionStringName(MultiLingualsDbProperties.ConnectionStringName)]
    public partial interface IMultiLingualsDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}


