using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Printer.Printing.EntityFrameworkCore;

[ConnectionStringName(PrintingDbProperties.ConnectionStringName)]
public class PrintingDbContext : AbpDbContext<PrintingDbContext>, IPrintingDbContext
{
    /* Add DbSet for each Aggregate Root here. Example:
     * public DbSet<Question> Questions { get; set; }
     */

    public PrintingDbContext(DbContextOptions<PrintingDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigurePrinting();
    }
}
