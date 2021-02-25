using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Wbm.EntityFrameworkCore
{
    public class WbmHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<WbmHttpApiHostMigrationsDbContext>
    {
        public WbmHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<WbmHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Wbm"));

            return new WbmHttpApiHostMigrationsDbContext(builder.Options);
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
