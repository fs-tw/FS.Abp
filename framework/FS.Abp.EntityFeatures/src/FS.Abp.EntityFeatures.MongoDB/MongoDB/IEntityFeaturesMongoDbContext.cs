using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.EntityFeatures.MongoDB
{
    [ConnectionStringName(EntityFeaturesDbProperties.ConnectionStringName)]
    public interface IEntityFeaturesMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
