using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Coding.Codes.MongoDB;

public static class CodesMongoDbContextExtensions
{
    public static void ConfigureCodes(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
