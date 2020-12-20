using Xunit;

namespace FS.Theme.MongoDB
{
    [CollectionDefinition(Name)]
    public class MongoTestCollection : ICollectionFixture<MongoDbFixture>
    {
        public const string Name = "MongoDB Collection";
    }
}