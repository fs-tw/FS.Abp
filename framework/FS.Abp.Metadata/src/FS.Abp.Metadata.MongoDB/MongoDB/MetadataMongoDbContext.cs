using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Metadata.MongoDB
{
    [ConnectionStringName(MetadataDbProperties.ConnectionStringName)]
    public class MetadataMongoDbContext : AbpMongoDbContext, IMetadataMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureMetadata();
        }
    }
}