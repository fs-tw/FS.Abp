using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.EntityFeatures.MongoDB
{
    [ConnectionStringName(EntityFeaturesDbProperties.ConnectionStringName)]
    public class EntityFeaturesMongoDbContext : AbpMongoDbContext, IEntityFeaturesMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureEntityFeatures();
        }
    }
}