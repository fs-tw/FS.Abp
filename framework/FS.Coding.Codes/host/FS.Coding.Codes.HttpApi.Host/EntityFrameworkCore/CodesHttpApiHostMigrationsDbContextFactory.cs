using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Coding.Codes.EntityFrameworkCore;

public class CodesHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<CodesHttpApiHostMigrationsDbContext>
{
    public CodesHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<CodesHttpApiHostMigrationsDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Codes"));

        return new CodesHttpApiHostMigrationsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
