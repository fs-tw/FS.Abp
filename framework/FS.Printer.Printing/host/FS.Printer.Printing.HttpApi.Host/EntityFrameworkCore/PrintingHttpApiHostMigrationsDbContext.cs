using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Printer.Printing.EntityFrameworkCore;

public class PrintingHttpApiHostMigrationsDbContext : AbpDbContext<PrintingHttpApiHostMigrationsDbContext>
{
    public PrintingHttpApiHostMigrationsDbContext(DbContextOptions<PrintingHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigurePrinting();
    }
}
