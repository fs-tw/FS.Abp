using FS.Entity.MultiLinguals.Samples;
using Xunit;

namespace FS.Entity.MultiLinguals.MongoDB.Samples;

[Collection(MongoTestCollection.Name)]
public class SampleRepository_Tests : SampleRepository_Tests<MultiLingualsMongoDbTestModule>
{
    /* Don't write custom repository tests here, instead write to
     * the base class.
     * One exception can be some specific tests related to MongoDB.
     */
}
