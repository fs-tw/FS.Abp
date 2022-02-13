using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Entity.EntityDefaults.MongoDB;

public static class EntityDefaultsMongoDbContextExtensions
{
    public static void ConfigureEntityDefaults(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
