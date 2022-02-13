using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Entity.EntityFeatures.MongoDB;

[ConnectionStringName(EntityFeaturesDbProperties.ConnectionStringName)]
public interface IEntityFeaturesMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
