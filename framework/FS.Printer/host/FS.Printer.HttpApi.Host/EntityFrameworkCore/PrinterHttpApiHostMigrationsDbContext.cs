using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Printer.EntityFrameworkCore;

public class PrinterHttpApiHostMigrationsDbContext : AbpDbContext<PrinterHttpApiHostMigrationsDbContext>
{
    public PrinterHttpApiHostMigrationsDbContext(DbContextOptions<PrinterHttpApiHostMigrationsDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.ConfigurePrinter();
    }
}
