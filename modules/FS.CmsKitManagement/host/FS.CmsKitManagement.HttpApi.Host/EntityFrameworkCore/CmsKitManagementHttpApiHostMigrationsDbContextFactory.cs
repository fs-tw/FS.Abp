using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    public class CmsKitManagementHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<CmsKitManagementHttpApiHostMigrationsDbContext>
    {
        public CmsKitManagementHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<CmsKitManagementHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("CmsKitManagement"));

            return new CmsKitManagementHttpApiHostMigrationsDbContext(builder.Options);
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
