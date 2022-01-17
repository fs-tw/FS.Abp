using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.Settings.EntityFrameworkCore
{
    public class SettingsHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<SettingsHttpApiHostMigrationsDbContext>
    {
        public SettingsHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<SettingsHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Settings"));

            return new SettingsHttpApiHostMigrationsDbContext(builder.Options);
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
