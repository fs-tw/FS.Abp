using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.SyncTable.MongoDB;

public static class SyncTableMongoDbContextExtensions
{
    public static void ConfigureSyncTable(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
