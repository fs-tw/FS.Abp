using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Authentication.MongoDB
{
    [ConnectionStringName(AuthenticationDbProperties.ConnectionStringName)]
    public interface IAuthenticationMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
