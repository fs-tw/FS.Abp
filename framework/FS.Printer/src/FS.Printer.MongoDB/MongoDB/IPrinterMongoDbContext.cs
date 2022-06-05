using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Printer.MongoDB;

[ConnectionStringName(PrinterDbProperties.ConnectionStringName)]
public interface IPrinterMongoDbContext : IAbpMongoDbContext
{
    /* Define mongo collections here. Example:
     * IMongoCollection<Question> Questions { get; }
     */
}
