using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Coding.MongoDB;

[ConnectionStringName(CodingDbProperties.ConnectionStringName)]
public interface ICodingMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
