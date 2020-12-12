using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.MongoDB
{
    [ConnectionStringName(AbpDbProperties.ConnectionStringName)]
    public interface IAbpMongoDbContext : Volo.Abp.MongoDB.IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
