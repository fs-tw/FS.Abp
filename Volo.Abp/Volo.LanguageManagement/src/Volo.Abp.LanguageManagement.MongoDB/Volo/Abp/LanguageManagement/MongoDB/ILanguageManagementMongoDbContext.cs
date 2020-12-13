using MongoDB.Driver;
using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    [ConnectionStringName(LanguageManagementDbProperties.ConnectionStringName)]
    public interface ILanguageManagementMongoDbContext : IAbpMongoDbContext
    {
        IMongoCollection<Language> Languages { get; }

        IMongoCollection<LanguageText> LanguageTexts { get; }
    }
}
