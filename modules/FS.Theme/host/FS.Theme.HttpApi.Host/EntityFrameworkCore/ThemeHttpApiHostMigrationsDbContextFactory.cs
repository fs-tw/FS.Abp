using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Theme.EntityFrameworkCore
{
    public class ThemeHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<ThemeHttpApiHostMigrationsDbContext>
    {
        public ThemeHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<ThemeHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Theme"));

            return new ThemeHttpApiHostMigrationsDbContext(builder.Options);
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
