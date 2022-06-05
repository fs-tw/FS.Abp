using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Coding.MongoDB;

public static class CodingMongoDbContextExtensions
{
    public static void ConfigureCoding(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
