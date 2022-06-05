using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Coding.Codes.MongoDB;

[ConnectionStringName(CodesDbProperties.ConnectionStringName)]
public class CodesMongoDbContext : AbpMongoDbContext, ICodesMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigureCodes();
    }
}
