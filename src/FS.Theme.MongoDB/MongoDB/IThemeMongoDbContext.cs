using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Theme.MongoDB
{
    [ConnectionStringName(ThemeDbProperties.ConnectionStringName)]
    public interface IThemeMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
