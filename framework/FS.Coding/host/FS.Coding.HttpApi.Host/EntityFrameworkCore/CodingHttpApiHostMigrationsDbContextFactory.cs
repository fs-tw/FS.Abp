using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Coding.EntityFrameworkCore;

public class CodingHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<CodingHttpApiHostMigrationsDbContext>
{
    public CodingHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<CodingHttpApiHostMigrationsDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Coding"));

        return new CodingHttpApiHostMigrationsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
