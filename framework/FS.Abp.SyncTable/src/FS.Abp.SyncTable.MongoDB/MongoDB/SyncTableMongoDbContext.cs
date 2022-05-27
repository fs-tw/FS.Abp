using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.SyncTable.MongoDB;

[ConnectionStringName(SyncTableDbProperties.ConnectionStringName)]
public class SyncTableMongoDbContext : AbpMongoDbContext, ISyncTableMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureSyncTable();
    }
}
