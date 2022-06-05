using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Printer.MongoDB;

[ConnectionStringName(PrinterDbProperties.ConnectionStringName)]
public class PrinterMongoDbContext : AbpMongoDbContext, IPrinterMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigurePrinter();
    }
}
