using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Coding.Codes.MongoDB;

[ConnectionStringName(CodesDbProperties.ConnectionStringName)]
public interface ICodesMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
