using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Printer.Printing.MongoDB;

[ConnectionStringName(PrintingDbProperties.ConnectionStringName)]
public interface IPrintingMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
