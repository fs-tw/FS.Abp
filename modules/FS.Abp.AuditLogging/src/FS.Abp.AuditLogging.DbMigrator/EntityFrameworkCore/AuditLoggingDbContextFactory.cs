using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    /* This class is needed for EF Core console commands
     * (like Add-Migration and Update-Database commands) */
    public class AuditLoggingDbContextFactory : IDesignTimeDbContextFactory<AuditLoggingDbContext>
    {
        public AuditLoggingDbContext CreateDbContext(string[] args)
        {
            FS.Abp.AuditLogging.EntityFrameworkCore.AbpAuditLoggingEfCoreEntityExtensionMappings.Configure();

            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<AuditLoggingDbContext>()
                .UseNpgsql(configuration.GetConnectionString("AbpAuditLogging"));

            return new AuditLoggingDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "./"))
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}
