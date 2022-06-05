using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Printer.Printing.EntityFrameworkCore;

[ConnectionStringName(PrintingDbProperties.ConnectionStringName)]
public interface IPrintingDbContext : IEfCoreDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * DbSet<Question> Questions { get; }
     */
}
