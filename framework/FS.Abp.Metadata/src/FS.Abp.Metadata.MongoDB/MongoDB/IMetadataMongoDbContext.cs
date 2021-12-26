using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Metadata.MongoDB
{
    [ConnectionStringName(MetadataDbProperties.ConnectionStringName)]
    public interface IMetadataMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
