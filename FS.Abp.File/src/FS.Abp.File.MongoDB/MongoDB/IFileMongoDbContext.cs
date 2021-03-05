using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.File.MongoDB
{
    [ConnectionStringName(FileDbProperties.ConnectionStringName)]
    public interface IFileMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
