using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Wbm.MongoDB
{
    [ConnectionStringName(WbmDbProperties.ConnectionStringName)]
    public interface IWbmMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
