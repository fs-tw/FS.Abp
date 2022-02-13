using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Entity.EntityDefaults.MongoDB;

[ConnectionStringName(EntityDefaultsDbProperties.ConnectionStringName)]
public interface IEntityDefaultsMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
