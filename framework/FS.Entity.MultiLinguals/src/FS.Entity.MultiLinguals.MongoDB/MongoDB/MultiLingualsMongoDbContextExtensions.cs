using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Entity.MultiLinguals.MongoDB;

public static class MultiLingualsMongoDbContextExtensions
{
    public static void ConfigureMultiLinguals(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
