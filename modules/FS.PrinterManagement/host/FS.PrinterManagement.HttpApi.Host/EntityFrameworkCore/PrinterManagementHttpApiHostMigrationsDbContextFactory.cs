using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.PrinterManagement.EntityFrameworkCore
{
    public class PrinterManagementHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<PrinterManagementHttpApiHostMigrationsDbContext>
    {
        public PrinterManagementHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<PrinterManagementHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("PrinterManagement"));

            return new PrinterManagementHttpApiHostMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
