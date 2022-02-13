using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Entity.EntityDefaults.EntityFrameworkCore;

public class EntityDefaultsHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<EntityDefaultsHttpApiHostMigrationsDbContext>
{
    public EntityDefaultsHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
    {
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<EntityDefaultsHttpApiHostMigrationsDbContext>()
            .UseSqlServer(configuration.GetConnectionString("EntityDefaults"));

        return new EntityDefaultsHttpApiHostMigrationsDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
