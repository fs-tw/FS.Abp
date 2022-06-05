using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Printer.EntityFrameworkCore;

[ConnectionStringName(PrinterDbProperties.ConnectionStringName)]
public class PrinterDbContext : AbpDbContext<PrinterDbContext>, IPrinterDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public PrinterDbContext(DbContextOptions<PrinterDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigurePrinter();
    }
}
