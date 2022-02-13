using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Entity.MultiLinguals.MongoDB;

[ConnectionStringName(MultiLingualsDbProperties.ConnectionStringName)]
public interface IMultiLingualsMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
