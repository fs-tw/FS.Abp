using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.EntityTypes.EntityFrameworkCore
{
    [ConnectionStringName(EntityTypesDbProperties.ConnectionStringName)]
    public interface IEntityTypesDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}