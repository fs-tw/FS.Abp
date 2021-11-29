using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.AuditLogging.MongoDB
{
    [ConnectionStringName(AuditLoggingDbProperties.ConnectionStringName)]
    public interface IAuditLoggingMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
