using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.LineNotify.MongoDB
{
    [ConnectionStringName(LineNotifyDbProperties.ConnectionStringName)]
    public interface ILineNotifyMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
