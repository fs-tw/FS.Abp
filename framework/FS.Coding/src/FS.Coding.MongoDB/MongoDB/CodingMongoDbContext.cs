using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Coding.MongoDB;

[ConnectionStringName(CodingDbProperties.ConnectionStringName)]
public class CodingMongoDbContext : AbpMongoDbContext, ICodingMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureCoding();
    }
}
