using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.EntityTypes.MongoDB
{
    [ConnectionStringName(EntityTypesDbProperties.ConnectionStringName)]
    public class EntityTypesMongoDbContext : AbpMongoDbContext, IEntityTypesMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureEntityTypes();
        }
    }
}