using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.PrinterManagement.MongoDB
{
    [ConnectionStringName(PrinterManagementDbProperties.ConnectionStringName)]
    public interface IPrinterManagementMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}
