using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Entity.EntityFeatures.EntityFrameworkCore;

[ConnectionStringName(EntityFeaturesDbProperties.ConnectionStringName)]
public interface IEntityFeaturesDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
