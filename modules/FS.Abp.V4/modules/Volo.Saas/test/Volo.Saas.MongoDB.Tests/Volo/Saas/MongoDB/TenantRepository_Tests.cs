using Xunit;

namespace Volo.Saas.MongoDB
{
    [Collection(MongoTestCollection.Name)]
    public class TenantRepository_Tests : TenantRepository_Tests<SaasMongoDbTestModule>
    {

    }
}
