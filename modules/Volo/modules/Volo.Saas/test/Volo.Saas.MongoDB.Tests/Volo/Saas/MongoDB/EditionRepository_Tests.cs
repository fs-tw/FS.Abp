using Xunit;

namespace Volo.Saas.MongoDB
{
    [Collection(MongoTestCollection.Name)]
    public class EditionRepository_Tests : EditionRepository_Tests<SaasMongoDbTestModule>
    {

    }
}
