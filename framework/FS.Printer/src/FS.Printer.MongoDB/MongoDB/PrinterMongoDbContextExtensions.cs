using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Printer.MongoDB;

public static class PrinterMongoDbContextExtensions
{
    public static void ConfigurePrinter(
        this IMongoModelBuilder builder)
    {
        Check.NotNull(builder, nameof(builder));
    }
}
