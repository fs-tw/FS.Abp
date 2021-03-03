using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Theme.TheProject.EntityFrameworkCore
{
    public class TheProjectHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<TheProjectHttpApiHostMigrationsDbContext>
    {
        public TheProjectHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<TheProjectHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("TheProject"));

            return new TheProjectHttpApiHostMigrationsDbContext(builder.Options);
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
