using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Printer.Printing.MongoDB;

public static class PrintingMongoDbContextExtensions
{
    public static void ConfigurePrinting(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
