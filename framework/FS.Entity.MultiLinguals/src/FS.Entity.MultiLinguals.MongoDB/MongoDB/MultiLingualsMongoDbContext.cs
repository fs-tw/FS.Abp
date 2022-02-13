using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Entity.MultiLinguals.MongoDB;

[ConnectionStringName(MultiLingualsDbProperties.ConnectionStringName)]
public class MultiLingualsMongoDbContext : AbpMongoDbContext, IMultiLingualsMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureMultiLinguals();
    }
}
