using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.MongoDB
{
    [ConnectionStringName(AbpDbProperties.ConnectionStringName)]
    public class AbpMongoDbContext : Volo.Abp.MongoDB.AbpMongoDbContext, IAbpMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureAbp();
        }
    }
}