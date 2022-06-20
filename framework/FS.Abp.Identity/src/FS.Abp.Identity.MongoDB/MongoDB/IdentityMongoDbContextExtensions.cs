using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.Identity.MongoDB;

public static class IdentityMongoDbContextExtensions
{
    public static void ConfigureIdentity(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
