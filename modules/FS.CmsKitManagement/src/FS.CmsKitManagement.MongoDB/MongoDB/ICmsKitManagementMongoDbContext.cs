using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.CmsKitManagement.MongoDB
{
    [ConnectionStringName(CmsKitManagementDbProperties.ConnectionStringName)]
    public interface ICmsKitManagementMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
