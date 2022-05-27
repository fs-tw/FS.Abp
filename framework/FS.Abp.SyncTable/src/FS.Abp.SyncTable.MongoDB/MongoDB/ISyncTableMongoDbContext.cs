using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.SyncTable.MongoDB;

[ConnectionStringName(SyncTableDbProperties.ConnectionStringName)]
public interface ISyncTableMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
