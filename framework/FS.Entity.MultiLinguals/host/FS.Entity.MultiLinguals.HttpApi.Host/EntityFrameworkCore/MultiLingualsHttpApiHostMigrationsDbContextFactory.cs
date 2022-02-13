using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Entity.MultiLinguals.EntityFrameworkCore;

public class MultiLingualsHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<MultiLingualsHttpApiHostMigrationsDbContext>
{
    public MultiLingualsHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<MultiLingualsHttpApiHostMigrationsDbContext>()
            .UseSqlServer(configuration.GetConnectionString("MultiLinguals"));

        return new MultiLingualsHttpApiHostMigrationsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
