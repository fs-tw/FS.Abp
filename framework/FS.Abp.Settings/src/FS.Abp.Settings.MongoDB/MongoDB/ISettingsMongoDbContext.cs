using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Settings.MongoDB
{
    [ConnectionStringName(SettingsDbProperties.ConnectionStringName)]
    public interface ISettingsMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
