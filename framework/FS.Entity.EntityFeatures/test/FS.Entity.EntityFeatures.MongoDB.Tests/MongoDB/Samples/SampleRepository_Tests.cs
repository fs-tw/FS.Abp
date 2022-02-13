using FS.Entity.EntityFeatures.Samples;
using Xunit;

namespace FS.Entity.EntityFeatures.MongoDB.Samples;

[Collection(MongoTestCollection.Name)]
public class SampleRepository_Tests : SampleRepository_Tests<EntityFeaturesMongoDbTestModule>
{
    /* Don't write custom repository tests here, instead write to
     * the base class.
     * One exception can be some specific tests related to MongoDB.
     */
}
