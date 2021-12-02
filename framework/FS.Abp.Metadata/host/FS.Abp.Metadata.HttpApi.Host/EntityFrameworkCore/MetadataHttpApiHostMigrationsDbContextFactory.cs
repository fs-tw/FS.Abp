using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.Metadata.EntityFrameworkCore
{
    public class MetadataHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<MetadataHttpApiHostMigrationsDbContext>
    {
        public MetadataHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<MetadataHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Metadata"));

            return new MetadataHttpApiHostMigrationsDbContext(builder.Options);
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
