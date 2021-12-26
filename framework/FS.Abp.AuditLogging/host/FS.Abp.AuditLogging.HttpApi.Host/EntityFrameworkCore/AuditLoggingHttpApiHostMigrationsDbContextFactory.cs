using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    public class AuditLoggingHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<AuditLoggingHttpApiHostMigrationsDbContext>
    {
        public AuditLoggingHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<AuditLoggingHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("AuditLogging"));

            return new AuditLoggingHttpApiHostMigrationsDbContext(builder.Options);
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
