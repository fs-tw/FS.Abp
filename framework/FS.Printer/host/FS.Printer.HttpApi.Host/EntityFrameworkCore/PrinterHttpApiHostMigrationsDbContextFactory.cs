using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Printer.EntityFrameworkCore;

public class PrinterHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<PrinterHttpApiHostMigrationsDbContext>
{
    public PrinterHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<PrinterHttpApiHostMigrationsDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Printer"));

        return new PrinterHttpApiHostMigrationsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
