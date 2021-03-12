using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.FormManagement.MongoDB
{
    [ConnectionStringName(FormManagementDbProperties.ConnectionStringName)]
    public interface IFormManagementMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
