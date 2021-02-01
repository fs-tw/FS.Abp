using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Theme.TheProject.MongoDB
{
    [ConnectionStringName(TheProjectDbProperties.ConnectionStringName)]
    public interface ITheProjectMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
