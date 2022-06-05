using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Printer.EntityFrameworkCore;

[ConnectionStringName(PrinterDbProperties.ConnectionStringName)]
public interface IPrinterDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
