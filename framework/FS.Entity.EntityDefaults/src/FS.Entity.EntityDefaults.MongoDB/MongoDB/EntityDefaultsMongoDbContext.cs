using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Entity.EntityDefaults.MongoDB;

[ConnectionStringName(EntityDefaultsDbProperties.ConnectionStringName)]
public class EntityDefaultsMongoDbContext : AbpMongoDbContext, IEntityDefaultsMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureEntityDefaults();
    }
}
