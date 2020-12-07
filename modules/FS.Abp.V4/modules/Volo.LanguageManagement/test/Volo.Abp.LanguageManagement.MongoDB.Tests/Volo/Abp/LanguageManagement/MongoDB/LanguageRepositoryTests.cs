using Xunit;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    [Collection(MongoTestCollection.Name)]
    public class LanguageRepositoryTests : LanguageRepository_Tests<LanguageManagementMongoDbTestModule>
    {

    }
}
