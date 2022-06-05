using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.PrinterManagement.EntityFrameworkCore
{
    public class PrinterManagementHttpApiHostMigrationsDbContext : AbpDbContext<PrinterManagementHttpApiHostMigrationsDbContext>
    {
        public PrinterManagementHttpApiHostMigrationsDbContext(DbContextOptions<PrinterManagementHttpApiHostMigrationsDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigurePrinterManagement();
        }
    }
}
