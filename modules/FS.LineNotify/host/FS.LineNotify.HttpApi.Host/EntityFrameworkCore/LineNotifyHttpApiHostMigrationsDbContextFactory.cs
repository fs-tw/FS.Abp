using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.LineNotify.EntityFrameworkCore
{
    public class LineNotifyHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<LineNotifyHttpApiHostMigrationsDbContext>
    {
        public LineNotifyHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<LineNotifyHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("LineNotify"));

            return new LineNotifyHttpApiHostMigrationsDbContext(builder.Options);
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
