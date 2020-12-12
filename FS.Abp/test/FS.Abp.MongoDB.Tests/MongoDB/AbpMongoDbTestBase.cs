namespace FS.Abp.MongoDB
{
    /* This class can be used as a base class for MongoDB integration tests,
     * while SampleRepository_Tests uses a different approach.
     */
    public abstract class AbpMongoDbTestBase : AbpTestBase<AbpMongoDbTestModule>
    {

    }
}