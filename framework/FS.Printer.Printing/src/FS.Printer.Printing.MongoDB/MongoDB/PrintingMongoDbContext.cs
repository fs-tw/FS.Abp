using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Printer.Printing.MongoDB;

[ConnectionStringName(PrintingDbProperties.ConnectionStringName)]
public class PrintingMongoDbContext : AbpMongoDbContext, IPrintingMongoDbContext
{
    /* Add mongo collections here. Example:
     * public IMongoCollection<Question> Questions => Collection<Question>();
     */

    protected override void CreateModel(IMongoModelBuilder modelBuilder)
    {
        base.CreateModel(modelBuilder);

        modelBuilder.ConfigurePrinting();
    }
}
